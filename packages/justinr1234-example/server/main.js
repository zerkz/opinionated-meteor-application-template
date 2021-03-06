import pkgJson from '../package.json';
import { publicationNames } from '../imports/publication-names.js';
import { routeMap, routeGroups, routesByGroup } from '../imports/routes.js';
import '../imports/api/collections';
import { ExampleCollection, ExampleSchema } from '../imports/api/collections/example/example.js';
import '../imports/api/methods';
import './publications';

export {
  pkgJson,
  ExampleCollection,
  ExampleSchema,
  publicationNames,
  routeMap,
  routeGroups,
  routesByGroup,
};

