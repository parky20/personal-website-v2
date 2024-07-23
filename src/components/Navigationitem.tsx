
type NavigationItemProps = {
    menu: string;
    href: string | undefined; // href can be string or undefined
  }; 

const menuItem = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: {
      duration: 1
    }
  }
}
  
const NavigationItem: React.FC<NavigationItemProps> = ({ menu, href }) => { 
    return (<div className="px-6 py-1 rounded-full hover:underline decoration-2 underline-offset-4 decoration-primary "><a href={href}>{menu}</a></div>);
};

export default NavigationItem
  