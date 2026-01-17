# API Gateway

This is a unified gateway endpoint that handles all backend operations. It hides external service URLs and provides a single entry point for all API calls.

## Architecture

All frontend requests go through `/api-gateway` with an action-based routing system:

```typescript
{
  action: "send-email" | "future-action",
  payload: { ...action-specific data }
}
```

## Adding New Actions

To add a new backend operation:

1. **Create a handler function:**
```typescript
async function handleNewAction(payload: NewActionPayload) {
  // Validate input
  // Call external service
  // Return result
  return {
    success: true,
    data: {...}
  };
}
```

2. **Add to switch statement:**
```typescript
switch (action) {
  case "send-email":
    result = await handleSendEmail(payload);
    break;

  case "new-action":
    result = await handleNewAction(payload);
    break;

  default:
    result = { success: false, message: "Unknown action" };
}
```

3. **Update frontend service:**
```typescript
const encryptedPayload = encryptData({
  action: 'new-action',
  payload: { ...data }
});

const response = await fetch(`${supabaseUrl}/functions/v1/api-gateway`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: encryptedPayload })
});
```

## Security Features

- All requests/responses encrypted with AES-256
- Rate limiting per IP (5 requests/minute)
- Input validation on all actions
- External service URLs never exposed to client
- Centralized error handling

## Current Actions

- `send-email`: Sends email via EmailJS (contact form)

## Environment Variables

Set in Supabase Dashboard > Edge Functions > Secrets:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
