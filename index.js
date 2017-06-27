const _ = require('lodash');
const ip = require('ip');
const ipAddress = ip.address();
const ifaces = require('os').networkInterfaces();
const macAddress = _.find(_.flatten(_.values(ifaces)), { address : '192.168.1.39'}).mac;
module.exports =  ({ types }) => {
    return {
        visitor: {
            ReferencedIdentifier (path) {
                if (path.node.name === '__IP_ADDRESS__') {
                    path.replaceWith(types.stringLiteral(ipAddress));
                }
                if (path.node.name === '__MAC_ADDRESS__') {
                    path.replaceWith(types.stringLiteral(macAddress));
                }
            }
        }
    };
};
