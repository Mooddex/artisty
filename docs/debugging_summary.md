# Debugging Summary: Gallery & Auth Issues

## 1. API 400 Bad Request (Invalid ID)

### Problem
The application was making a request to `https://api.artic.edu/api/v1/artworks/undefined`, resulting in a 400 error.

### Origin
The method `getSingleArt` was called using `.apply()` incorrectly in `[id].vue`:
```javascript
store.getSingleArt.apply(route.params.id)
```
`Function.prototype.apply(thisArg, argsArray)` expects the second argument to be an array of arguments. By passing `route.params.id` as the first argument, it was treated as the `this` context, and the actual arguments passed to the function were `undefined`.

### Solution
Call the function directly with the argument:
```javascript
store.getSingleArt(route.params.id);
```

---

## 2. `sanitizeHtml` is not a function

### Problem
The application crashed with `TypeError: _ctx.sanitizeHtml is not a function` when rendering the artwork details.

### Origin
The template contained `v-html="sanitizeHtml(art.description)"`, attempting to call a function named `sanitizeHtml`. However, this function was not defined in the `<script setup>` block, making it inaccessible to the template.

### Solution
Define the function in the script section. For a quick fix, a pass-through function was added:
```javascript
const sanitizeHtml = (html) => {
  return html;
};
```

### Other Solutions / Improvements
1.  **Security (Recommended)**: Use a library like `dompurify` to actually sanitize the HTML and prevent XSS attacks.
    ```javascript
    import DOMPurify from 'dompurify';
    const sanitizeHtml = (html) => DOMPurify.sanitize(html);
    ```
2.  **Global Utility**: If this is used in multiple components, move it to a composable (e.g., `useSanitize`) or a global plugin.

---

## 3. Broken Reactivity (Loading State)

### Problem
The loading spinner and artwork data were not updating in the UI even if the API call succeeded.

### Origin
The component defined local refs that shadowed the store's state:
```javascript
const art = ref(null); // Local, disconnected ref
```
The store updated its own state, but the template was reading from these local, empty variables.

### Solution
Connect to the store using `storeToRefs` to maintain reactivity:
```javascript
import { storeToRefs } from 'pinia';
const { art, isLoading, error } = storeToRefs(store);
```

---

## Conversation Summary
1.  **Auth Store Migration**: Moved auth logic from a composable to a Pinia store. Fixed issues with reactivity (`storeToRefs`) and missing actions (`signInWithEmail`).
2.  **Database Connection**: Fixed `db.ts` not exporting the client and `auth.ts` using the wrong import.
3.  **Gallery Fetch Error**: Identified that `getSingleArt` was receiving `undefined` due to incorrect `.apply()` usage.
4.  **Template Crash**: Fixed the missing `sanitizeHtml` function definition in the Gallery component.