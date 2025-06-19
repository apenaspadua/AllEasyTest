import { NativeModules } from "react-native";

const { DeviceManufacturerModule, SystemVersionModule } = NativeModules;

export async function getAndroidManufacturer() {
  try {
    const manufacturer = await DeviceManufacturerModule.getDeviceManufacturer();
    console.log("Fabricante Android:", manufacturer);
    return manufacturer;
  } catch (error) {
    console.error("Erro ao pegar fabricante:", error);
  }
}

export async function getIOSVersion() {
  try {
    const version = await SystemVersionModule.getSystemVersion();
    console.log("Versão do iOS:", version);
    return version;
  } catch (error) {
    console.error("Erro ao pegar versão iOS:", error);
  }
}
