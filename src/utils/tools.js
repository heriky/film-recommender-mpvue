/**
 * Created by hankang on 2018/6/1
 */

export function throttle(target, name, descriptor) {
  const oldFunc = descriptor.value || descriptor.initializer;
  let isRunning = false;
  descriptor.value = function(...args) {
    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(() => {
      oldFunc(args);
      isRunning = false;
    })
  };
  return descriptor;
}
