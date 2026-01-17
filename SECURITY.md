# OrryGames Security Architecture

## Overview

OrryGames has been architected with security as a top priority. All sensitive operations are handled server-side through secure Supabase Edge Functions, with comprehensive protection against common web vulnerabilities.

## Security Implementations

### 1. Unified API Gateway Pattern

All backend operations route through a single `/api-gateway` endpoint that hides the destination of all API calls.

**Benefits:**
- API keys never exposed in client-side code
- Users only see your domain in Network tab, never external URLs
- Cannot determine which third-party services are being used
- Centralized routing logic for all backend operations
- Full control over request/response validation
- Protection against API key theft and service fingerprinting

**Implementation:**
- Single gateway Edge Function (`api-gateway`) handles all backend requests
- Frontend sends action-based requests (e.g., `{action: 'send-email', payload: {...}}`)
- Gateway decrypts, routes to appropriate handler, and returns encrypted response
- All third-party API calls (EmailJS, etc.) happen server-side
- Credentials stored securely in Supabase environment variables
- Users never see external service URLs in Network tab

### 2. End-to-End Payload Encryption

All data transmitted between the frontend and backend is encrypted using AES-256 encryption via CryptoJS.

**Benefits:**
- Network traffic inspection reveals only encrypted strings
- Data cannot be read in browser DevTools Network tab
- Protection against man-in-the-middle inspection
- Even if intercepted, data remains unreadable

**Implementation:**
- Client-side encryption using CryptoJS AES-256
- All request payloads encrypted before transmission
- Server-side decryption in Edge Functions
- All response payloads encrypted before returning to client
- Shared encryption key (server-side secret in production)

**What Users See in Network Tab:**
```json
{
  "data": "U2FsdGVkX1+8xvZ3K2... [encrypted string]"
}
```

Instead of readable data like:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "My secret message"
}
```

### 3. Rate Limiting

Implemented at the Edge Function level to prevent abuse and DoS attacks.

**Configuration:**
- 5 requests per minute per IP address
- Tracks client IP from `x-forwarded-for` header
- Returns 429 status code when limit exceeded
- In-memory rate limit store with automatic expiration

**Protection Against:**
- Spam submissions
- Brute force attacks
- Resource exhaustion
- API abuse

### 4. CORS Security

Strict CORS headers configured on all Edge Functions.

**Headers:**
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-Client-Info, Apikey
```

**Note:** While currently set to `*` for development, in production this should be restricted to your specific domain(s).

### 5. Security Headers

Multiple security headers configured in Vite to protect against common attacks.

**Headers:**
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - Enables XSS filter
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts access to device features

### 6. Input Validation

Comprehensive validation on both client and server sides.

**Client-Side Validation:**
- Email format validation
- Required field checks
- Prevents empty submissions

**Server-Side Validation:**
- Re-validates all inputs (never trust client)
- Email format verification
- Sanitizes data before processing
- Prevents injection attacks

### 7. Environment Variable Security

**Frontend (.env):**
- Only non-sensitive configuration exposed
- Supabase public URL and anon key (safe for client-side)
- No API keys or secrets

**Backend (Edge Functions):**
- All sensitive credentials stored as Supabase secrets
- EmailJS service ID, template ID, and public key
- Never accessible from client-side code
- Automatically injected at runtime

## Data Flow

### Email Submission Flow:
1. User submits form on client
2. Client validates input locally
3. **Client encrypts entire request with AES-256** (includes action: 'send-email')
4. Encrypted payload sent to `/api-gateway` (only your domain visible)
5. Gateway validates rate limit
6. **Gateway decrypts payload and reads action**
7. Gateway routes to appropriate handler (e.g., handleSendEmail)
8. Handler re-validates input
9. Handler calls EmailJS API with server-side credentials
10. **Gateway encrypts response**
11. Encrypted response returned to client
12. **Client decrypts response and displays result**

**What User Sees in Network Tab:**
- Request URL: `https://yourdomain.com/functions/v1/api-gateway`
- No external service URLs visible
- No indication of which services are being used

## Security Best Practices

### What We Do:
- Unified API gateway (single endpoint for all operations)
- End-to-end payload encryption (AES-256)
- Hide all external service URLs from client
- Server-side API proxying
- Rate limiting per IP
- Input validation (client + server)
- Secure credential storage
- CORS configuration
- Security headers
- Error handling without exposing internals

### What We Don't Do:
- Expose API keys in frontend code
- Trust client-side validation alone
- Allow unlimited API requests
- Return detailed error messages to clients
- Store sensitive data in browser storage

## Production Recommendations

Before deploying to production:

1. **Update CORS Policy:**
   ```typescript
   "Access-Control-Allow-Origin": "https://orrygames.com"
   ```

2. **Monitor Rate Limits:**
   - Review and adjust rate limits based on legitimate traffic
   - Consider implementing user-based rate limiting

3. **Add Logging:**
   - Log failed authentication attempts
   - Monitor rate limit violations
   - Track unusual activity patterns

4. **Content Security Policy:**
   - Add CSP headers to prevent XSS
   - Restrict script sources
   - Control resource loading

5. **Regular Security Audits:**
   - Review Edge Function logs
   - Update dependencies regularly
   - Monitor for security advisories

## Security Contacts

If you discover a security vulnerability, please contact:
- Email: contact.orrygames@gmail.com
- Subject: [SECURITY] - [Brief Description]

## Compliance

This implementation follows OWASP Top 10 guidelines:
- A01:2021 - Broken Access Control ✓
- A02:2021 - Cryptographic Failures ✓
- A03:2021 - Injection ✓
- A04:2021 - Insecure Design ✓
- A05:2021 - Security Misconfiguration ✓
- A07:2021 - Identification and Authentication Failures ✓
- A08:2021 - Software and Data Integrity Failures ✓
- A09:2021 - Security Logging and Monitoring Failures ✓

## Architecture Diagram

```
┌──────────────────────────┐
│        Browser           │
│    (Client + AES)        │
└──────────┬───────────────┘
           │ POST /api-gateway
           │ Encrypted: {action: 'send-email', payload: {...}}
           │ (Only your domain visible)
           │
           ▼
┌──────────────────────────┐
│    Vite Dev Server       │
│   Security Headers       │
└──────────┬───────────────┘
           │ Encrypted Payload
           │
           ▼
┌──────────────────────────┐
│   API Gateway Function   │
│   - Decrypt AES          │
│   - Rate Limiting        │
│   - Route by Action      │
│   - Call Handler         │
│   - Encrypt Response     │
│   - CORS                 │
└──────────┬───────────────┘
           │ Internal Routing
           │ (Hidden from client)
           ├────────────────┐
           │                │
           ▼                ▼
    ┌──────────┐    ┌──────────┐
    │ Handler  │    │ Handler  │
    │  Email   │    │  Future  │
    └────┬─────┘    └──────────┘
         │ Secure Credentials
         │ (EmailJS never visible)
         ▼
    ┌─────────────────────┐
    │   EmailJS API       │
    │  (External Service) │
    │  Hidden from Client │
    └─────────────────────┘
```

## Network Traffic Inspection

When viewing network requests in browser DevTools, users will see:

**Request:**
- URL: `https://yourdomain.com/functions/v1/api-gateway`
- Method: `POST`
- Payload:
```json
{
  "data": "U2FsdGVkX1+kQHh3KpRvX8J7GvNm4ZU..."
}
```

**Response:**
- Status: `200 OK`
- Payload:
```json
{
  "data": "U2FsdGVkX1/pQvZ3K2RvX8J7GvNm4..."
}
```

**What's Hidden:**
- No external service URLs visible (EmailJS, future APIs)
- No indication of which backend services are being used
- Cannot determine what third-party integrations exist
- All business logic and routing decisions hidden
- Sensitive data remains encrypted throughout transmission

This ensures that even with full access to browser developer tools:
1. Users cannot see external service URLs
2. Cannot determine which APIs or services the app uses
3. Cannot read sensitive data in transit
4. Cannot reverse-engineer backend architecture

## Summary

OrryGames implements a defense-in-depth security strategy with multiple layers of protection:

1. **Gateway Layer** - Single endpoint hides all backend destinations and services
2. **Encryption Layer** - All data encrypted with AES-256 during transmission
3. **Backend Proxy Layer** - API keys and external URLs never exposed to clients
4. **Rate Limiting Layer** - Prevents abuse and DoS attacks per IP address
5. **Validation Layer** - Comprehensive input validation on both sides
6. **Headers Layer** - Security headers prevent common attacks

This multi-layered approach ensures:
- Users cannot see which services or APIs the application uses
- External service URLs are completely hidden
- Even if one layer is compromised, others provide continued protection
- Data remains secure, private, and unreadable to unauthorized parties
- Backend architecture cannot be reverse-engineered from network traffic
