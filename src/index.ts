/**
    __/\\\\\\\\\\\\\\\___________________________________________________/\\\\\\_____________________________________________________________        
     _\///////\\\/////___________________________________________________\////\\\_____________________________________________________________       
      _______\/\\\____________________________________________/\\\\\\\\\_____\/\\\_______________________/\\\__________________________________      
       _______\/\\\___________/\\\\\\\\_____/\\\\\__/\\\\\____/\\\/////\\\____\/\\\_____/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\\\\___/\\\\\\\\\\_     
        _______\/\\\_________/\\\/////\\\__/\\\///\\\\\///\\\_\/\\\\\\\\\\_____\/\\\____\////////\\\___\////\\\////____/\\\/////\\\_\/\\\//////__    
         _______\/\\\________/\\\\\\\\\\\__\/\\\_\//\\\__\/\\\_\/\\\//////______\/\\\______/\\\\\\\\\\_____\/\\\_______/\\\\\\\\\\\__\/\\\\\\\\\\_   
          _______\/\\\_______\//\\///////___\/\\\__\/\\\__\/\\\_\/\\\____________\/\\\_____/\\\/////\\\_____\/\\\_/\\__\//\\///////___\////////\\\_  
           _______\/\\\________\//\\\\\\\\\\_\/\\\__\/\\\__\/\\\_\/\\\__________/\\\\\\\\\_\//\\\\\\\\/\\____\//\\\\\____\//\\\\\\\\\\__/\\\\\\\\\\_ 
            _______\///__________\//////////__\///___\///___\///__\///__________\/////////___\////////\//______\/////______\//////////__\//////////__
                                                        A Project by ninjaninja140 to create useful project templates!
    
	@author ninjaninja140
	@name ts-docker-template
	
*/

import { JovaServer } from '@bracketed/jova.js';
import dotenv from 'dotenv';
import multer from 'multer';
import extensions from './extensions.json' with { type: 'json' };

dotenv.config();

const application = new JovaServer({
	middlewares: [
		multer({
			storage: multer.memoryStorage(),
			limits: {
				fileSize: 512 * 1024 * 1024, // 512MB
			},
			fileFilter: function (_req, file, callback) {
				if (!extensions.find((e) => e === file.mimetype)) return callback(null, false);
				return callback(null, true);
			},
		}).array('media', 4) as any,
	],
});

application.listen(3000);
