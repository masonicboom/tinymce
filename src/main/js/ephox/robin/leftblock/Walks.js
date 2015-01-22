define(
  'ephox.robin.leftblock.Walks',

  [
    'ephox.perhaps.Option',
    'ephox.phoenix.api.general.Gather'
  ],

  function (Option, Gather) {
    var top = {
      rules: [
        { current: Gather.backtrack, next: Gather.sidestep, fallback: Option.none() },
        { current: Gather.sidestep, next: Gather.sidestep, fallback: Option.some(Gather.backtrack) },
        { current: Gather.advance, next: Gather.sidestep, fallback: Option.some(Gather.sidestep) }
      ],
      inclusion: function (universe, next, item) {
        // You can't just check the mode, because it may have fallen back to backtracking, 
        // even though mode was sidestep. Therefore, to see if a node is something that was
        // the parent of a previously traversed item, we have to do this. Very hacky... find a 
        // better way.
        var isParent = universe.property().parent(item).exists(function (p) {
          return universe.eq(p, next.item());
        });
        return !isParent;
      }
    };

    var all = {
      // rules === undefined, so use default.
      inclusion: function (universe, next, item) {
        return universe.property().isText(next.item());
      }
    };

    return {
      top: top,
      all: all
    };
  }
);