import { Container } from "../container";
import { UspSubTitle, UspTitle, UspWrapper } from "../usp-wrapper";
import { RentalManagement } from "../illustrations/rental-management";
import { AccountingReporting } from "../illustrations/accounting-reporting";

export const StreamlinedOperations = () => {
  return (
    <div>
      <Container>
        <h2 className="mb-5 text-center text-[3.6rem] leading-none text-white md:mb-7 md:text-8xl">
          Streamlined Operations
        </h2>
        <p className="mx-auto mb-12 w-full max-w-[68rem] text-center text-lg text-primary-text md:text-xl">
          Automate tasks and create efficiency in your Rental Operations,
          optimize profitability, and gain peace of mind.{" "}
        </p>
      </Container>
      <div className="overflow-y-hidden md:mx-auto md:h-auto md:max-w-[120rem] md:overflow-y-auto">
        <div className="flex flex-shrink-0 snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-12 md:grid md:grid-cols-8 md:gap-6 md:overflow-x-hidden md:px-8">
          <UspWrapper
            className="col-span-5 [--order:1] border-e-grey bg-[#ffffff] "
          >
            <AccountingReporting />
            <div className="text-left px-8 w-full">
              <UspTitle>Accounting & Reporting</UspTitle>
              <UspSubTitle>
                Manage expenses and incomes at all levels - property, estate and
                whole portfolio.
              </UspSubTitle>
            </div>
          </UspWrapper>
          <UspWrapper
          reverse={true}
            className="col-span-3 overflow-hidden [--order:3] border-e-grey bg-[#ffffff] "
          >
            <RentalManagement />
            <div className="text-left px-8 w-full">
              <UspTitle>Rental Management</UspTitle>
              <UspSubTitle>
                Manage all aspects of renting - short-term rentals and long
                leases.{" "}
              </UspSubTitle>
            </div>
          </UspWrapper>
        </div>
      </div>
    </div>
  );
};
