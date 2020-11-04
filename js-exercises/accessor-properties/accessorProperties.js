const accessorProperties = () => ({
  num: 0,
  get number() {
    return this.num;
  },
  set number(value) {
    this.num = value.toString(2);
  },

});
export {
  accessorProperties,
};
