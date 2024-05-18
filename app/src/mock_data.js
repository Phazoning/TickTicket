export default mock = {
    users: [
        {
            "user": "User1",
            "name": "Th3Cr1m50nFuck3r",
            "pass": "P4rTyC@nD1",
            "mark": "9.99/10",
            "oversees": ["User2", "User3"]
        },
        {
            "user": "User2",
            "name": "S€r@s",
            "pass": "6L00DR4G€",
            "mark": "8/10"
        },
        {
            "user": "User3",
            "name": "Pip",
            "pass": "0u1",
            "mark": "2/10",
            "oversees": ["User2"]
        }
    ],

    articles: [
        {
            "title": "KB0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet lacus quis nisi porttitor, vel aliquam magna blandit. Suspendisse vehicula arcu sed aliquam fermentum. Nam in pellentesque nisl. Phasellus pulvinar dui a arcu fringilla tincidunt. Vestibulum quam odio, bibendum et odio in, auctor consequat neque. Sed elementum ornare elit, eu sagittis mauris elementum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras at ultricies eros, a aliquet nisl. Nulla at ultricies augue. Proin nec sollicitudin justo. Fusce tincidunt sagittis mi sed gravida. Vivamus vel eros ut risus ultrices cursus."
        },
        {
            "title": "KB1",
            "content": "Nam porta, nulla a efficitur viverra, eros magna imperdiet augue, nec lacinia enim sapien eget nisi. Vivamus mi magna, placerat in viverra non, accumsan vel est. Duis vestibulum arcu ut ligula venenatis lobortis. Sed elit nisl, vulputate ac dui ac, bibendum mattis nunc. Praesent fermentum, augue vel vulputate lobortis, mi ex tempus lectus, sit amet feugiat purus tellus et nisl. Donec efficitur massa libero, sed rhoncus mi tristique nec. Sed eget pharetra leo. Cras condimentum nibh sapien, eu tristique dolor mollis lacinia. Etiam pellentesque nibh risus, in scelerisque nulla pulvinar quis."
        },
        {
            "title": "KB2",
            "content": "Sed sed felis et magna porttitor molestie. Vestibulum et porta arcu. Donec egestas porttitor tellus at sagittis. Quisque ultricies pretium tortor id aliquam. Sed nec lacinia ipsum, eu semper tortor. Aliquam nec porttitor eros, eu interdum mi. Nulla quis arcu laoreet, mattis nulla quis, bibendum odio. Etiam dapibus ultricies urna sagittis sagittis."
        }
    ],

    incidents: [
        {
            "incident": "inc0",
            "status": "Open",
            "priority": "VIP",
            "person in charge": "User1",
            "comments": "",
            "opened": "2024-03-01T12:30:00.000Z",
            "closed": "5000-12-31T23:59:59.000Z",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut lobortis enim. Pellentesque ultricies odio vel diam elementum, vitae placerat ex consequat. Aliquam ut lorem vitae dolor elementum accumsan. Donec ex magna, elementum eget orci id, iaculis posuere tellus. Nam imperdiet vulputate luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et odio non ipsum bibendum placerat ut a lorem."
        },
        {
            "incident": "inc1",
            "status": "Open",
            "priority": "Medium",
            "person in charge": "",
            "comments": "",
            "opened": "2024-02-29T12:04:00.000Z",
            "closed": "5000-12-31T23:59:59.000Z",
            "content": "Nam dapibus fringilla bibendum. Sed in blandit odio, quis fermentum sem. Ut non lorem venenatis dui convallis rutrum. Aliquam sodales tellus tortor, sit amet mollis risus dignissim vitae. Duis velit magna, posuere at sem nec, tincidunt hendrerit nunc. Nulla auctor quam id placerat scelerisque. Mauris tincidunt, ex quis consectetur ullamcorper, ipsum felis porta est, id mattis lacus nisl a ante. Nunc semper hendrerit sodales. Cras imperdiet, ex sodales lobortis tincidunt, dolor nisl dapibus libero, quis pharetra diam velit vitae diam. Phasellus augue urna, bibendum non lectus vitae, hendrerit elementum lorem. Nam ut pharetra massa. In sollicitudin tempor fringilla. Mauris condimentum, augue accumsan tincidunt imperdiet, diam nulla pulvinar arcu, ut lacinia odio leo quis quam. In hac habitasse platea dictumst. Integer sit amet felis ac nisl convallis finibus vel sed dolor. Morbi tempus ac lacus non venenatis."
        },
        {
            "incident": "inc2",
            "status": "Standby",
            "priority": "Low",
            "person in charge": "User2",
            "comments": "",
            "opened": "2024-03-01T06:00:00.000Z",
            "closed": "5000-12-31T23:59:59.000Z",
            "content": "Nullam volutpat scelerisque odio. Mauris interdum lacinia elit tincidunt accumsan. Quisque tristique, sapien nec eleifend convallis, metus arcu cursus libero, vel sodales quam sem sit amet justo. Nulla orci nunc, tristique ac mattis non, venenatis sit amet odio. Donec dapibus sodales ante, lobortis euismod dolor varius quis. Maecenas nec erat eleifend, malesuada nisi egestas, pretium erat. Nulla facilisi. Etiam ut sagittis orci. Phasellus mollis tincidunt metus, fermentum sollicitudin risus pharetra sit amet. Sed dapibus feugiat ante sed vehicula. Quisque eleifend, ipsum nec mattis luctus, sem enim tempor magna, non lacinia tellus ante vel lectus. Praesent sit amet tortor sed quam finibus vestibulum et at ipsum. Aenean neque orci, gravida vel sapien vel, posuere fermentum ante. Integer egestas, libero eu tincidunt vulputate, nibh urna viverra erat, at facilisis dolor mi at orci. Ut accumsan, massa nec vulputate auctor, neque velit commodo justo, eu volutpat orci mauris non magna."
        },
        {
            "incident": "inc3",
            "status": "Closed",
            "priority": "High",
            "person in charge": "User3",
            "comments": "Cicero solved it",
            "opened": "2023-12-29T21:00:00.000Z",
            "closed": "5000-12-31T23:59:59.000Z",
            "content": "Duis luctus nulla porttitor erat rutrum, euismod sodales ante facilisis. Curabitur at vulputate sapien. Donec porttitor, nibh vel lacinia scelerisque, dolor urna condimentum lectus, ut venenatis nisi dui vitae nisl. Nunc quis odio placerat, interdum metus a, tincidunt ligula. Donec iaculis hendrerit velit eget tempor. Morbi ut metus tempus, semper nibh sit amet, dignissim urna. Integer mauris massa, fringilla nec sapien sed, sagittis consectetur urna. Sed venenatis tincidunt elit in pulvinar. Nam faucibus ex venenatis elit euismod, a gravida velit posuere. Duis vel porttitor elit, non dictum lorem. Mauris convallis odio ac imperdiet varius. Phasellus ut pharetra libero. Aenean dignissim nisl elit. Suspendisse potenti."
        }
    ]
}