let services = [
  {
    title: 'Drawning Scketch',
    body: new Lorem().generate(40)
  },
  {
    title: 'Making Design',
    body: new Lorem().generate(40)
  },
  {
    title: 'Developing Product',
    body: new Lorem().generate(40)
  }
];

Template.services.helpers({
  services: () => services
});
