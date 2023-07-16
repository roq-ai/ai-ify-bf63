interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Business Owner', 'Team Member', 'Admin'],
  tenantName: 'Organization',
  applicationName: 'Ai-ify',
  addOns: ['notifications', 'chat'],
};
