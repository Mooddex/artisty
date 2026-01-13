 Here are Nuxt examples using Better Auth with Google provider:

## Sign In Component


```vue
<script lang="ts" setup>
import { signIn } from "~/lib/auth-client.js";

const email = ref("");
const password = ref("");

const handleSignIn = async () => {
	await signIn.email({
		email: email.value,
		password: password.value,
		callbackURL: "/dashboard",
	}, {
		onError(context) {
			alert(context.error.message);
		},
		onSuccess() {
			useRouter().push("/dashboard");
		},
	});
};
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <Card class="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" v-model="email" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a href="/forget-password" class="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" placeholder="password" v-model="password" required />
                    </div>
                    <Button type="submit" class="w-full" @click="handleSignIn">
                        Login
                    </Button>
                    <Button variant="outline" class="w-full" @click="async () => {
                        await signIn.social({
                            provider: 'google',
                            callbackURL: '/'
                        })
                    }">
                        Login with Google
                    </Button>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <a href="/sign-up" class="underline">
                        Sign up
                    </a>
                </div>
            </CardContent>
        </Card>
    </div>
</template>

```

[](https://github.com/better-auth/examples/blob/main)

## Dashboard Component with Session


```vue
<script setup lang="ts">
import { useSession } from "~/lib/auth-client";
const { data: session } = await useSession(useFetch);
</script>

<template>
    <div class="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0">
        <Card class="w-[350px]">
            <CardHeader>
                <CardTitle>
                    User
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage :src="session?.user.image || ''" alt="User profile" />
                        <AvatarFallback>{{ session?.user.name[0] }}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p class="text-sm">
                            {{ session?.user?.name }}
                        </p>
                        <p class="text-xs">
                            {{ session?.user?.email }}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button @click="async () => {
                    await signOut()
                    // router.push('/')
                }" variant="secondary">
                    Sing Out
                </Button>
            </CardFooter>
        </Card>
    </div>
</template>

```

[](https://github.com/better-auth/examples/blob/main)

## Auth Client Setup


```typescript
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL,
});

export const {
	signIn,
	signOut,
	signUp,
	useSession,
	requestPasswordReset,
	resetPassword,
} = authClient;

```

[](https://github.com/better-auth/examples/blob/main/nuxt-example)

## Auth Configuration


```typescript
import Database from "better-sqlite3";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
	database: new Database("./db.sqlite"),
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		},
	},
	emailAndPassword: {
		enabled: true,
		async sendResetPassword(url, user) {
			console.log("Reset password url:", url);
		},
	},
});

```

[](https://github.com/better-auth/examples/blob/main/nuxt-example)

## Server API Handler


```typescript
import { auth } from "~/lib/auth";

export default defineEventHandler((event) => {
	return auth.handler(toWebRequest(event));
});

```

[](https://github.com/better-auth/examples/blob/main/nuxt-example)

## Auth Middleware


```typescript
import { authClient } from "~/lib/auth-client";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const { data: session } = await authClient.useSession(useFetch);
	if (!session.value) {
		if (to.path === "/dashboard") {
			return navigateTo("/");
		}
	}
});

```

[](https://github.com/better-auth/examples/blob/main/nuxt-example)