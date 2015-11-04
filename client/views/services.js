let services = [
  {
    title: 'Drawning Scketch',
    body: new Lorem().generate(50)
  },
  {
    title: 'Making Design',
    body: new Lorem().generate(50)
  },
  {
    title: 'Developing Product',
    body: new Lorem().generate(50)
  }
];

Template.services.helpers({
  services: () => services
});
