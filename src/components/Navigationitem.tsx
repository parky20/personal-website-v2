
type NavigationItemProps = {
    menu: string;
    href?: string; // href can be string or undefined
    active?: boolean
  }; 
 
const NavigationItem: React.FC<NavigationItemProps> = ({ menu, href, active }) => { 
  console.log(active)
    return (<div className={`px-6 py-1 rounded-full ${active ? 'underline' : 'no-underline'} hover:underline decoration-2 underline-offset-4 decoration-primary`}><a href={href}>{menu}</a></div>);
};

export default NavigationItem
  