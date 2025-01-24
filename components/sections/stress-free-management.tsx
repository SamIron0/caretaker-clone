import classNames from "classnames";
import { Container } from "../container";
import { UspSubTitle, UspTitle, UspWrapper } from "../usp-wrapper";
import { MaintenanceManagement } from "../illustrations/maintenance-management";
import { TenantOwnerPortals } from "../illustrations/tenant-owner-portals";

export const StressFreeManagement = () => {
  return (
    <div>
      <Container>
        <h2 className="mb-5 text-center text-[3.6rem] leading-none text-white md:mb-7 md:text-8xl">
          Stress free
          <br />
          property management
        </h2>
        <p className="mx-auto mb-12 w-full max-w-[68rem] text-center text-lg text-primary-text md:text-xl">
          Efficient Communication and Maintenance Solutions for Property
          Managers, for Landlords and for Community Associations.{" "}
        </p>
      </Container>
      <div className="overflow-y-hidden md:mx-auto md:h-auto md:max-w-[120rem] md:overflow-y-auto">
        <div className="flex flex-shrink-0 snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-12 md:grid md:grid-cols-8 md:gap-6 md:overflow-x-hidden md:px-8">
          <UspWrapper className="col-span-5 overflow-hidden [--order:3] border-e-grey bg-[#ffffff] ">
            <MaintenanceManagement />
            <UspTitle>Tenant & Owner Portals</UspTitle>
            <UspSubTitle>
              Easy communication and reporting to occupants and property owners.
            </UspSubTitle>
          </UspWrapper>
          <UspWrapper className="col-span-3 [--order:1] border-e-grey bg-[#ffffff] ">
            <TenantOwnerPortals />
            <UspTitle>Maintenance Management</UspTitle>
            <UspSubTitle>
              Manage vendors, technicians, and provide proactive maintenance for
              all facilities.{" "}
            </UspSubTitle>
          </UspWrapper>
        </div>
      </div>
    </div>
  );
};
