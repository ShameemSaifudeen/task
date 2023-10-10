import { Button } from "@chakra-ui/react";
interface SideBarButtonsProps {
  icon: JSX.Element;
  label: string;
  isActive: boolean;
}

const SideBarButtons: React.FC<SideBarButtonsProps> = ({
  icon,
  label,
  isActive,
}) => {
  return (
    <>
      <Button 
    fontFamily="Work Sans"
    fontSize="16px"
    fontWeight="500"
    lineHeight="21px"
    letterSpacing="0em"
    textAlign="center"
    leftIcon={icon}
    colorScheme="blue"
    bg={isActive ? "#0063FF" : "white"}
    color={isActive ? "white" : "#0063FF"}
    border="1px solid"
    borderColor="#0063FF"
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
