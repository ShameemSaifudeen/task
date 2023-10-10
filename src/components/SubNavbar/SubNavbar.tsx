import { Box, Divider, Flex } from "@chakra-ui/react";
import NavItem from "../NavItems/NavItems";
import { useLocation } from "react-router-dom";

const SubNavbar = () => {
  const location = useLocation();
  return (
    <>
    <Box 
    h="64px" 
    px="72px" 
    py="10px"
  >
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      gap="8px" 
      // boxShadow="md"
    >

        <NavItem
          to="/dashboard"
          IconComponent="/icons/dashboardIcon.svg"
          label="Dashboard"
          currentPath={location.pathname}
        />
        <NavItem
          to="/market"
          IconComponent="/icons/marcets icon.svg"
          label="Markets"
          currentPath={location.pathname}
        />
        <NavItem
          to="/"
          IconComponent="/icons/machine icon.svg"
          label="Machines"
          currentPath={location.pathname}
        />
        <NavItem
          to="/operator"
          IconComponent="/icons/operatorsIcon.svg"
          label="Operators"
          currentPath={location.pathname}
        />
        <NavItem
          to="/products"
          IconComponent="/icons/products icon.svg"
          label="Products"
          currentPath={location.pathname}
        />
        <NavItem
          to="/transaction"
          IconComponent="/icons/transaction icon.svg"
          label="Transactions"
          currentPath={location.pathname}
        />
        <NavItem
          to="/event"
          IconComponent="/icons/event icon.svg"
          label="Events"
          currentPath={location.pathname}
        />
        <NavItem
          to="/content"
          IconComponent="/icons/content icon.svg"
          label="Content"
          currentPath={location.pathname}
        />
        <NavItem
          to="/job"
          IconComponent="/icons/jobs icon.svg"
          label="Jobs"
          currentPath={location.pathname}
        />
        <NavItem
          to="/billing"
          IconComponent="/icons/billing icon.svg"
          label="Billing"
          currentPath={location.pathname}
        />
        <NavItem
          to="/report"
          IconComponent="/icons/reports icon.svg"
          label="Reports"
          currentPath={location.pathname}
        />
        <NavItem
          to="/admin"
          IconComponent="/icons/admin icon.svg"
          label="Admin"
          currentPath={location.pathname}
        />
      </Flex>

    </Box>
      <Divider borderColor="#AFB0B4" />
    </>
  );
};

export default SubNavbar;
