"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("Articles", [
        {
          name: "Introduction to Ashtanga",
          slug: "introduction-to-ashtanga",
          image: "ashtanga.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id.</p>",
          published: "2020-01-08 15:02:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Articles", [
        {
          name: "Morning vinyasa flow routine",
          slug: "morning-vinyasa-flow-routine",
          image: "morning.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id.</p>",
          published: "2020-04-14 15:02:41",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Articles", [
        {
          name: "Secrets of a yoga teacher",
          slug: "secrets-of-a-yoga-teacher",
          image: "yoga-teacher.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id.</p>",
          published: "2060-05-28 15:02:55",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};