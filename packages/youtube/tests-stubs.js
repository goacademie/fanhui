if (Meteor.isClient) {
  Notifications = {
    warn: () => true
  }
}
if (Meteor.isServer) {
  Vdos.find().map((elt) => Vdos.remove(elt._id))
  Vdos.insert({video_id: 'AxRg12345tG'})
  Vdos.insert({video_id: 'CaBPn3vZkRs'})
  Vdos.insert({video_id: 'Xjrb1kDnUYY'})
  Vdos.insert({video_id: 'Jw8HYF1ZpJM'})
}
