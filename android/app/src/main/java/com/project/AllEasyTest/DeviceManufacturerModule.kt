package com.project.AllEasyTest

import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceManufacturerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  
    override fun getName(): String = "DeviceManufacturerModule"

    @ReactMethod
    fun getDeviceManufacturer(promise: Promise) {
        promise.resolve(Build.MANUFACTURER)
    }
}
