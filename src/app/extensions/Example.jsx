import React, { useState, useEffect } from "react";
import {
  Divider,
  Button,
  Text,
  Flex,
  hubspot,
} from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <DomainStatusExtension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
    fetchProperties={actions.fetchCrmObjectProperties}
  />
));

// Define the Extension component, taking in runServerless, context, sendAlert % fetchProperties as props
const DomainStatusExtension = ({ context, runServerless, sendAlert, fetchProperties }) => {

    const [domain, setDomain] = useState("");
  
    useEffect(() => {
        fetchProperties(["domain"])
          .then(properties => {
            setDomain(properties.domain);
        });
    }, [fetchProperties]);


  const [status, setStatus] = useState("[unknown]");

  const handleClick = async () => {
    const { response } = await runServerless({ name: "domainStatus", parameters: { domain: domain } });
    setStatus( response );
    //sendAlert({ message: response });
  };

  return (
    <>
      <Text>
        Status:
      </Text>
      <Text format={{ fontWeight: "bold" }}>
        {status.toUpperCase()}
      </Text>
      
      <Divider />
      <Flex direction="row" align="end" gap="small">
        <Button type="submit" onClick={handleClick}>
          Get Domain Status
        </Button>
      </Flex>
    </>
  );
};
