const ip = require('ip');
module.exports =  ({ types }) => {
    return {
        visitor: {
            ReferencedIdentifier (path) {
                if (path.node.name === '__IP_ADDRESS__') {
                    path.replaceWith(types.stringLiteral(ip.address()));
                }
            }
        }
    };
};
