import { CSSProperties } from "react";
import { Container } from "../container";
import classNames from "classnames";
import { UspTitle } from "../usp-wrapper";
import { UspSubTitle } from "../usp-wrapper";
import { UspWrapper } from "../usp-wrapper";
import { TenantOwnerPortals } from "../illustrations/tenant-owner-portals";
import { MaintenanceManagement } from "../illustrations/maintenance-management";
import { Documentation } from "../illustrations/documentation";
import { IssueReporting } from "../illustrations/issue-reporting";

export const Paperless = () => {
  return (
    <div
      style={
        {
          "--feature-color": "194,97,254",
          "--secondary-color": "53,42,79",
        } as CSSProperties
      }
      className={classNames(
        "relative z-[-1] my-[12rem] md:my-[25.2rem]",
        "after:absolute after:inset-0 after:bg-feature",
        "before:feature-mask before:absolute before:mb-[-42rem] before:h-[40rem] before:w-full before:translate-y-[-20rem] before:rotate-180 before:scale-[2] before:bg-[conic-gradient(from_90deg_at_60%_50%,#000212,rgba(var(--secondary-color))),conic-gradient(from_270deg_at_40%_50%,rgba(var(--secondary-color)),#000212)] before:bg-[50%_100%,50%_100%] before:bg-no-repeat before:[background-position:1%_0%,99%_0%] before:md:mb-[-40rem] before:md:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--secondary-color))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--secondary-color)),#000212)]"
      )}
    >
      <Container className="flex flex-col items-center pt-15">
        <>
          <div className="relative w-full after:absolute after:inset-0 after:bg-feature-image2">
            <div className={classNames("mx-auto w-full text-center ")}>
              <h2 className="text-gradient mb-4 pb-3 text-center text-4xl font-medium md:mb-11 md:text-9xl">
                Go paperless
              </h2>
              <p className="mx-auto mb-12 w-full max-w-[68rem] text-center text-md text-primary-text md:text-xl">
                Streamline your digital operations, simplify workflows, resolve
                concerns, and enhance customer experiences.{" "}
              </p>
            </div>
          </div>
          <div className="h-[48rem] overflow-y-hidden md:mx-auto md:h-auto md:max-w-[120rem] md:overflow-y-auto">
            <div className="flex flex-shrink-0 snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-12 md:grid md:grid-cols-8 md:gap-6 md:overflow-x-hidden md:px-8">
              <UspWrapper className="col-span-3 [--order:1 border-grey-dark bg-[#101723] py-0 relative ">
                <div className="absolute inset-x-0 top-8 z-10 text-left px-8">
                  <UspTitle className="text-off-white">
                    Issues Reporting & Management
                  </UspTitle>
                  <UspSubTitle className="w-full">
                    Manage and resolve occupant complaints.{" "}
                  </UspSubTitle>
                </div>
                <IssueReporting />
              </UspWrapper>
              <UspWrapper className="col-span-5 [--order:3] border-grey-dark bg-[#101723] py-0 relative">
                <div className="absolute inset-x-0 top-8 z-10 text-left px-8">
                  <UspTitle className="text-off-white">Documentation</UspTitle>
                  <UspSubTitle>
                    Discard manual filing systems, have everything digitized and
                    accessible from anywhere
                  </UspSubTitle>
                </div>
                <Documentation />
              </UspWrapper>
            </div>
          </div>
        </>
      </Container>
    </div>
  );
};
