if (Meteor.isClient) {
  Notifications = {
    warn: () => true
  }
}
if (Meteor.isServer) {
  Vdos.find().map((elt) => Vdos.remove(elt._id))
  Vdos.insert({youtube_id: 'AxRg12345tG'})
}
