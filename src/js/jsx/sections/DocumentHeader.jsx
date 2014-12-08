/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

define(function (require, exports, module) {
    "use strict";

    var React = require("react"),
        Fluxxor = require("fluxxor"),
        FluxMixin = Fluxxor.FluxMixin(React),
        strings = require("i18n!nls/strings");

    var DocumentHeader = React.createClass({
        mixins: [FluxMixin],
        
        /**
         * Scrolls back one document, wrapping around if necessary
         */
        _moveBack: function () {
            this.getFlux().actions.documents.selectPreviousDocument();
        },
        
        /**
         * Scrolls forward a document, wrapping around if necessary
         */
        _moveForward: function () {
            this.getFlux().actions.documents.selectNextDocument();
        },
    
        render: function () {
            var document = this.props.document,
                header = document ? document.name : strings.APP_NAME;

            return (
                <header className="document-header">
                    <button
                        className="previous-arrow"
                        title={strings.SELECT_PREVIOUS_DOCUMENT}
                        className="documentNext"
                        onClick={this._moveBack}/>
                    <h2 title={header}>
                        {header}
                    </h2>
                    <button
                        className="next-arrow"
                        title={strings.SELECT_NEXT_DOCUMENT}
                        className="documentPrevious"
                        onClick={this._moveForward}/>
                </header>
            );
        },
    });

    module.exports = DocumentHeader;
});
