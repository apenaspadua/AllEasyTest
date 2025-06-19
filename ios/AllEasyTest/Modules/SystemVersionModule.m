#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE (SystemVersionModule, NSObject)
RCT_EXTERN_METHOD(getSystemVersion
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)
@end