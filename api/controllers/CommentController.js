/**
 * CommentController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var Twit = require('twit');

var T = new Twit({
    consumer_key:         '5U68HimGxlTFka5P6s9l59aMf'
  , consumer_secret:      'PRsrPWW3OcK020bVj2ERo76FYw7sobdlJKM61Qw9Npzl8tgak0'
  , access_token:         '77126387-EkdOTj7hGyhkc7aiEvJap02M83R2DnE3Bjgnyyk5k'
  , access_token_secret:  'HMGSEpPt6vPdwvEjuaGOJeGXwnvecYyM4kALJ2vuhgiM3'
});

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/comment/create`
   */
   create: function (req, res) {
    
    // Send a JSON response
    T.get('followers/ids', { screen_name: 'rolilink' },  function (err, data, response) {
        console.log(data);
        console.log(err);
        return res.json(data);
    })
    
  },


  /**
   * Action blueprints:
   *    `/comment/destroy`
   */
   destroy: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CommentController)
   */
  _config: {}

  
};
