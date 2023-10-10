import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  IconComponent: string;
  label: string;
  currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  IconComponent,
  label,
  currentPath,
}) => {
  const isActive = currentPath === to;
  return (
    <Box display="flex" alignItems="center" marginRight="1rem">
      <img src={IconComponent} alt={label} />
      <Button
        as={Link}
        to={to}
        size="xs"
        colorScheme="blue"
        variant={isActive ? "solid" : "ghost"}
        color={isActive ? "white" : "black"}
        background={isActive ? "blue.500" : "none"}
        textDecoration="none"
        boxShadow="none"
        paddingTop="0.2rem"
      >
        {label}
      </Button>
    </Box>
  );
};

export default NavItem;
