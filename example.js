System.register([], function (_export, _context) {
  var dep;
  let div = document.createElement("div");
  div.textContent = "mounted";
  return {
    setters: [
      function (_dep) {
        dep = _dep;
      },
    ],
    execute: function () {
      _export({
        bootstrap(props) {
          return Promise.resolve().then(() => {
            // One-time initialization code goes here
            console.log("bootstrapped!");
          });
        },
        mount(props) {
          return Promise.resolve().then(() => {
            document.querySelector("body").appendChild(div);
            console.log("mounted!");
          });
        },
        unmount(props) {
          return Promise.resolve().then(() => {
            div.remove();
            console.log("unmounted!");
          });
        },
      });
    },
  };
});
