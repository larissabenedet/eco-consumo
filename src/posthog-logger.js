import posthog, { isPostHogConfigured } from "./posthog";

const logInfo = (message, attributes) => {
  if (isPostHogConfigured) {
    posthog.logger.info(message, attributes);
  }
};

export const posthogLog = {
  applicationStarted: () => {
    logInfo("eco-consumo web application started", {
      application: "eco-consumo",
      runtime: "browser",
    });
  },
  practiceGuidanceStarted: (entryPoint) => {
    logInfo("practice guidance started", { entry_point: entryPoint });
  },
  outboundResourceOpened: (resourceType, attributes) => {
    logInfo("outbound resource opened", {
      resource_type: resourceType,
      ...attributes,
    });
  },
};
