import { Button } from "@chakra-ui/react";
interface SideBarButtonsProps {
  icon: JSX.Element;
  label: string;
  isActive: boolean;
}



const SideBarButtons : React.FC<SideBarButtonsProps> = ({ icon, label, isActive }) => {
  return (
    <>
      <Button
        leftIcon={icon}
        colorScheme="blue"
        bg={isActive ? "blue.500" : "white"} 
        color={isActive ? "white" : "blue.500"}
        border="1px solid"
        borderColor="blue.500"
        borderRadius="md"
        width="100%"
        justifyContent="flex-start"
        marginBottom="16px" 
      >
        {label}
      </Button>
    </>
  );
};

export default SideBarButtons;
