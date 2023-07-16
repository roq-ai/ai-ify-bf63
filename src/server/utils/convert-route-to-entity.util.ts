const mapping: Record<string, string> = {
  'ai-tools': 'ai_tool',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
