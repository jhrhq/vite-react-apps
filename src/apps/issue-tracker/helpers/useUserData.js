import { useQuery } from "@tanstack/react-query";

export function useUserData(userId) {
  const userData = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    staleTime: 5000 * 60 * 5,
  });

  return userData;
}
