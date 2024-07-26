import { cn } from "@/lib/utils";

type NavigationItemProps = {
    menu: string;
    href?: string; // href can be string or undefined
    active?: boolean
  }; 
 
const NavigationItem: React.FC<NavigationItemProps> = ({ menu, href, active }) => {  
  return (
    <div className={cn(
      'text-primary dark:text-white px-6 py-1 rounded-full hover:underline decoration-2 underline-offset-4 decoration-accent',
      active ? 'underline' : 'no-underline'
    )}>
      <a href={href}>{menu}</a>
    </div>
  );
  };

export default NavigationItem
  