
export default async (route) => {
    const layout = route.fullPath.includes('admin') ? 'backend' : 'frontend';
    const component = await import(`../layouts/${layout}.vue`);
    route['meta'] = {}
    route['meta']['layout'] = component.default;
}