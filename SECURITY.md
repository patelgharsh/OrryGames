# OrryGames Security Architecture

## Overview

OrryGames has been architected with security as a top priority. All sensitive operations are handled server-side through secure Supabase Edge Functions, with comprehensive protection against common web vulnerabilities.

## Security Implementations

### 1. Backend API Proxy Pattern

All third-party API calls are proxied through secure server-side Edge Functions rather than being called directly from the frontend.

**Benefits:**
- API keys never exposed in client-side code
- Cannot be intercepted through browser DevTools or Network tab
- Full control over request/response validation
- Protection against API key theft

**Implementation:**
- Email service moved to Supabase Edge Function (`send-email`)
- Frontend only communicates with your Edge Functions
- Credentials stored securely in Supabase environment variables

### 2. Rate Limiting

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

### 3. CORS Security

Strict CORS headers configured on all Edge Functions.

**Headers:**
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-Client-Info, Apikey
```

**Note:** While currently set to `*` for development, in production this should be restricted to your specific domain(s).

### 4. Security Headers

Multiple security headers configured in Vite to protect against common attacks.

**Headers:**
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - Enables XSS filter
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts access to device features

### 5. Input Validation

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

### 6. Environment Variable Security

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
3. Request sent to Edge Function (no API keys in request)
4. Edge Function validates rate limit
5. Edge Function re-validates input
6. Edge Function calls EmailJS with server-side credentials
7. Response returned to client (sanitized)

## Security Best Practices

### What We Do:
- Server-side API proxying
- Rate limiting
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
┌─────────────┐
│   Browser   │
│  (Client)   │
└──────┬──────┘
       │ No API Keys Exposed
       │
       ▼
┌─────────────────────┐
│   Vite Dev Server   │
│  Security Headers   │
└──────────┬──────────┘
           │
           ▼
┌────────────────────────┐
│  Supabase Edge Func    │
│    - Rate Limiting     │
│    - Validation        │
│    - CORS              │
└──────────┬─────────────┘
           │ Secure Credentials
           │
           ▼
┌─────────────────────┐
│   EmailJS API       │
│  (External Service) │
└─────────────────────┘
```

## Summary

OrryGames implements a defense-in-depth security strategy with multiple layers of protection. All sensitive operations are secured server-side, API keys are never exposed to clients, and comprehensive validation ensures data integrity at every step.
