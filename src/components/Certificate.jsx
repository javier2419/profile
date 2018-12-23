import React from 'react';

class Certificate extends React.Component {
	render(){
		return(
       <div class="box clearfix">
           <h2>Certificaciones</h2>
                    <div class="col-xs-12 col-sm-6">
                        <div id="ccna-cer" data-toggle="modal" data-target="#myModal" type="button"></div>
                        
                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Certificación Cisco CCNA 1</h4>
                                    </div>
                                    <div class="modal-body">
                                        <img class="img-responsive" src="https://i.imgur.com/BPyoEmC.jpg" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div id="linux-cer" data-toggle="modal" data-target="#myModal2" type="button"></div>
                        
                        <div id="myModal2" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Certificación Linux Essentials</h4>
                                    </div>
                                    <div class="modal-body">
                                        <img class="img-responsive" src="https://i.imgur.com/DKaUdD7.png" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
        </div>
      
			);
	}
}

export default Certificate;