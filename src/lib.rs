#![deny(clippy::all)]

use napi_derive::napi;
use napi::bindgen_prelude::*;

#[napi]
pub fn test<T: Fn(String) -> Result<()>>(
    callback: T,
) {
  for x in 0..10000000 {
    callback(x.to_string()).unwrap();
  }
}
