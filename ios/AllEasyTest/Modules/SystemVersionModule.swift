import Foundation
import UIKit

@objc(SystemVersionModule)
class SystemVersionModule: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }

  @objc
  func getSystemVersion(
    _ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    let version = UIDevice.current.systemVersion
    resolve(version)
  }
}
