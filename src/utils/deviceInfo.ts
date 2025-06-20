import { NativeModules } from "react-native";

const { DeviceManufacturerModule, SystemVersionModule } = NativeModules;

export async function getAndroidManufacturer() {
  try {
    const manufacturer = await DeviceManufacturerModule.getDeviceManufacturer();
    return manufacturer;
  } catch (error) {
    throw new Error("Erro ao pegar fabricante");
  }
}

export async function getIOSVersion() {
  try {
    const version = await SystemVersionModule.getSystemVersion();
    return version;
  } catch (error) {
    throw new Error("Erro ao pegar versão iOS");
  }
}
