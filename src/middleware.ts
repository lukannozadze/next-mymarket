import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ka','en','ru'],
 
  // Used when no locale matches
  defaultLocale: 'ka'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ka|en|ru)/:path*']
};