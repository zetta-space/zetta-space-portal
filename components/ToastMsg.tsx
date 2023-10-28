import React from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

function ToastMsg() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
}

export default ToastMsg;
