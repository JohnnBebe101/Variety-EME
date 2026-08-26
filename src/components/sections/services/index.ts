import { ssrSafeLazy } from '../../../utils/ssrSafeLazy';

/**
 * Service section lazy-loaded components.
 * Each component is created ONCE at module scope via ssrSafeLazy for stable identity.
 * Plain object properties (no getters) prevent allocation on every property access.
 */
const ServicePages = {
  TelecommunicationsMobileRollout: ssrSafeLazy(() => import('./TelecomMobileRollout'), '/src/components/sections/services/TelecomMobileRollout'),
  TelecommunicationsFiberOptics: ssrSafeLazy(() => import('./TelecomFiberOptics'), '/src/components/sections/services/TelecomFiberOptics'),
  TelecommunicationsTowerCivilWorks: ssrSafeLazy(() => import('./TelecomTowerCivilWorks'), '/src/components/sections/services/TelecomTowerCivilWorks'),
  TelecommunicationsOperationsMaintenance: ssrSafeLazy(() => import('./TelecomOperationsMaintenance'), '/src/components/sections/services/TelecomOperationsMaintenance'),
  TelecommunicationsWarehouseManagement: ssrSafeLazy(() => import('./TelecomWarehouseManagement'), '/src/components/sections/services/TelecomWarehouseManagement'),
  PowerTransmissionDistribution: ssrSafeLazy(() => import('./PowerTransmissionDistribution'), '/src/components/sections/services/PowerTransmissionDistribution'),
  PowerMinigridSystems: ssrSafeLazy(() => import('./PowerMinigridSystems'), '/src/components/sections/services/PowerMinigridSystems'),
  PowerBackupPower: ssrSafeLazy(() => import('./PowerBackupPower'), '/src/components/sections/services/PowerBackupPower'),
  PowerBuildingElectromechanical: ssrSafeLazy(() => import('./PowerBuildingElectromechanical'), '/src/components/sections/services/PowerBuildingElectromechanical'),
  IctDatacenterDataCenterDesign: ssrSafeLazy(() => import('./IctDatacenterDesign'), '/src/components/sections/services/IctDatacenterDesign'),
  IctDatacenterEnterpriseNetworking: ssrSafeLazy(() => import('./IctEnterpriseNetworking'), '/src/components/sections/services/IctEnterpriseNetworking'),
  IctDatacenterSystemDevelopment: ssrSafeLazy(() => import('./IctSystemDevelopment'), '/src/components/sections/services/IctSystemDevelopment'),
  IctDatacenterCybersecurityManaged: ssrSafeLazy(() => import('./IctCybersecurityManaged'), '/src/components/sections/services/IctCybersecurityManaged'),
  IctDatacenterTrainingConsultancy: ssrSafeLazy(() => import('./IctTrainingConsultancy'), '/src/components/sections/services/IctTrainingConsultancy'),
  AcademyOverview: ssrSafeLazy(() => import('./AcademyOverview'), '/src/components/sections/services/AcademyOverview'),
  AcademyFiberOpticsCertification: ssrSafeLazy(() => import('./AcademyFiberOpticsCert'), '/src/components/sections/services/AcademyFiberOpticsCert'),
  AcademyTelecomAutomationTraining: ssrSafeLazy(() => import('./AcademyTelecomAutomation'), '/src/components/sections/services/AcademyTelecomAutomation'),
  AcademyInstitutionalPartnerships: ssrSafeLazy(() => import('./AcademyInstitutionalPartners'), '/src/components/sections/services/AcademyInstitutionalPartners'),
};

export default ServicePages;
