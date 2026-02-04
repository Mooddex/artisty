import { authClient } from "~/lib/auth-client";
export default defineNuxtRouteMiddleware(async (to) => {
	const session = await authClient.useSession(useFetch); 
	if (session) {
		if (to.path === "/profile") {
			return navigateTo("/login");
		}
	}
});