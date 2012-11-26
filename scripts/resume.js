/*!
 * Copyright (c) 2012 Guillermo Winkler
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

(function () {
    var shippedProducts = [
        { id : "Analyics", 
            title: "Social Analytics",
            roles : ["Product Management", "Programming"],
            images: ["images/analytics.png"],
            thumb: "images/analytics-thumb.png",
            description : ''.concat("Engineered and programmed the Analytics solution for the Social Desktop application.</br>", "\n", "\n",
                                    "Using a <a href='http://blog.guillermowinkler.com/blog/2012/10/19/group-by-considered-harmful/'>big-data approach </a>",
                                    "to data modelling, delivered a solution with response times on the millisecond range."),
            skills : ["c++", "lua", "javascript", "Cassandra", "Redis", "Solr", "git", "jenkins", "selenium", "python"]
        },
        { id : "Agent", 
            title: "Social Desktop",
            roles : ["Product Management", "Programming"],
            images: ["images/social desktop.png"],
            thumb: "images/social desktop-thumb.png",
            description : ''.concat("Engineered and programmed a next generation communications tool for SMB.\n", "</br>",
                                    "Integrating traditional channels such as telephony and sms, with twitter, webchat, IM and more.",
                                    "Designed with high availability and scalability in mind from day one."),
            skills : ["c++", "lua", "javascript", "Cassandra", "Redis", "Solr", "git", "jenkins", "selenium", "python", "gdb", "valgrind"]
        },
        { id : "Tweety", 
            title: "Tweety",
            roles : ["Product Management"],
            images: ["images/tweety_design.png"],
            thumb: "images/tweety-thumb.png",
            description : ''.concat("Tweety is a web based programming tool, like Balsamiq Mockups, only that it's not a mockup.\n", "</br>",
                                    "What's great about Tweety is that is as easy as balsamiq for newcomers,",
                                    "but lets you dive deep into coding for advanced users, without losing the UX integrity."),
            skills: ["lua", "javascript", "mongodb"]
        },
        { id : "Supervisor", 
            title: "Realtime Supervisor",
            roles : ["Product Management", "Programming"],
            images: ["images/supervisor.png"],
            thumb: "images/supervisor-thumb.png",
            description : ''.concat("Engineered and programmed a web based supervising solution for contact centers on the cloud.\n", "</br>",
                                    "With smart filtering techniques, allowed for realtime information update even under high load conditions."),
            skills : ["c++", "lua", "javascript", "SQL Server", "WinDbg"]
        },
        { id : "Administrator", 
            title: "Multitenant Contact Center",
            roles : ["Product Management", "Programming"],
            images: ["images/contactcenter.png"],
            thumb: "images/contactcenter-thumb.png",
            description : ''.concat("Engineered and delivered a multitenant contact center solution in order to facilitate the company transition to the cloud.\n", 
                                    "</br>Supporting different hosted and remote workers scenarios, high latency and jittered network conditions",
                                    "were common use cases solved."),
            skills : ["c++", "lua", "javascript", "SQL Server", "Cassandra"]
        },
        { id : "Asterisk", 
            title: "Asterisk for Contact Centers",
            roles : ["Product Management", "Programming"],
            thumb: "images/asterisk-logo-thumb.png",
            description : ''.concat("When Asterisk was only version 1.1, shipped the first Contact Center solution using Asterisk for ",
                                     "IVR, ACD, Recording, Call Monitor and Predictive Dialing</br>\n\n",
                                     "Still in use and having processed billions of calls, ",
                                     "I even <a href='https://issues.asterisk.org/jira/secure/IssueNavigator.jspa?reset=true&customfield_10202=guillecabeza'>",
                                     " fixed some bugs</a> in the process"),
            skills : ["c", "Asterisk", "SIP", "ISDN", "IAX", "gdb", "valgrind"]
        },
        { id : "H3Recording", 
            title: "NBX H3 Recording Solution",
            roles : ["Product Management", "Programming"],
            thumb: "images/3comnbx.gif",
            description : ''.concat("I reverse engineered the undocumented NBX H3 protocol, and built a recording solution using pcap library.\n", "</br>",
                                    "The solution relied heavily on switches with port mirroring capabilities for customers with hundreds of recorded positions."),
            skills: ["c++", "reverse engineering", "tcp/ip", "assembler", "IDA Pro", "WinDbg"]
        },
        { id : "IVRDesigner", 
            title: "IVR Flow Designer Tool",
            roles : ["Product Management", "Programming", "Design"],
            images: ["images/ivrdesigner.png"],
            thumb: "images/ivrdesigner-thumb.png",
            description : ''.concat("Shipped an IVR graphical design tool.\n", "</br>",
                                    "Based on the Workflow paradigm and with a strong emphasis in business integration,",
                                    "allowing the user to easily integrate customer communications to business processes."),
            skills:[]
        },
        { id : "TAPINBX", 
            title: "NBX TAPI IVR",
            roles : ["Product Management", "Programming"],
            thumb: "images/3comnbx.gif",
            description : "Built the first IVR solution for 3COM NBX right after TAPI wavephones were supported by the platform.",
            skills: ["c++", "WinDbg"]
        }
    ];

    var skills = {
        data : {
            Languages : { 
                "c++" : 8,
                "lua" : 8,
                "javascript" : 8,
                "python": 5,
                "clojure":4,
                "c": 9,
            },
            "DB/Search" : {
                "SQL Server": 8,
                "MySql": 6,
                "Cassandra": 7,
                "Redis": 8,
                "Solr" : 6
            },
            Tools: {
                "WinDbg": 9,
                "gdb" : 8,
                "IDA Pro" : 6,
                "valgrind" : 7,
                "git" : 7,
                "jenkins" : 8,
                "selenium" : 7,
            },
        },
        colors : {
            category : "#2B2B2B",
            opacity : 0.8,
            fontColor: "#fff",
            byCategory : {
                Tools : {
                    color : "#E9E581",
                    opacity : 0.8,
                    fontColor: "#000000"
                },
                Languages : {
                    color: "#DE1B1B",
                    opacity: 0.7,
                    fontColor: "#fff"
                },
                "DB/Search" : {
                    color: "#2B2B2B",
                    opacity: 0.1,
                    fontColor: "#000000"
                }
            },
        }
    };
    
    var productsBySkill = {

    };

    function loadShippedProducts() {
        var $currentRow, $prevRow;
        for (var i = 0; i < shippedProducts.length; i++) {
            var product = shippedProducts[i];
            var $product = $(''.concat(
                              '<div class="grid_3">',
                                '<h4>', product.title, '</h4>',
                                  '<div class="ship-text">',
                                    '<p>',
                                      '<div class="ship-img cacho">',
                                         '<div class="ship-roles">',
                                            '<ul>',
                                            '</ul>',
                                         '</div>',
                                      '</div>',
                                       product.description.replace("\n", "</br>"),
                                   '</p>',
                                 '</div>',
                              '</div>'));
            $product.attr("id", "product_" + product.id);
            for (var j = 0; j < product.roles.length; j++) {
                var role = product.roles[j];
                $product.find('.ship-roles ul').append("<li><span>" + role + "</span></li>");
            }
            for (var j = 0; j < product.skills.length; j++) {
                var skill = product.skills[j];
                if (!productsBySkill[skill]) {
                    productsBySkill[skill] = [];
                }
                productsBySkill[skill].push(product.id);
            }
            var $thumb = $('<img src="' + product.thumb + '" border="0" alt="' + product.title + '">');
            if (product.images && product.images.length > 0) {
                //TODO: multiple images for the slider
                var $image = $('<a href="' + product.images[0] + '" rel="lightbox" title="' + product.title + '"></a>');
                $thumb = $image.wrapInner($thumb);
            }
            $product.find('.ship-img').prepend($thumb);
            if (i % 4 === 0) {
                if ($currentRow) {
                    $currentRow.insertAfter($prevRow || $("#shippedSection"));
                }
                $prevRow = $currentRow;
                $currentRow = $('<div class="row shipped-row"></div>');
            }
            $currentRow.append($product);
        }
        if ($currentRow) {
            $currentRow.insertAfter($prevRow || $("#shippedSection"));
        }
        //add the fun fact at the end of the current row
        if ($currentRow)  {
            var offset = 9 - $currentRow.children().length * 3;
            if (offset >= 0) {
                var $funFact = $(''.concat(
                                '<div class="grid_3 funfact">',
                                        '<h5>Fun Fact</h5>',
                                        '<p>I started programming at age 10 using a ZX Spectrum+.',
                                            '</br>',
                                            '</br>', 
                                            'My first customer was at age 14, I made a ',
                                            'program to track patient\'s clinical history using DBase III Plus.',
                                        '</p>',
                                        '<blockquote>',
                                            'The customer was my mother, MD.<br />',
                                        '</blockquote>',
                                '</div>'));
                if (offset > 0) {
                    $funFact.addClass('offset_' + 6);
                }
                $currentRow.append($funFact);
            }
        }

    };

    /*
     * This is just a fun graph drawn with a couple of cuadratic bezier curves, no real data to be found here
     */
    function createSEChart() {
        $("#se_chart").children().remove();
        var paperWidth = $("#se_chart").parent().width();
        var paperHeight = paperWidth / 3;
        var se = Raphael("se_chart", paperWidth, paperHeight);
        var states = ["98", "99", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
        var chartHeight = paperHeight * 0.9;
        var chartWidth = paperWidth * 0.9;
        Raphael.g.axis(0, chartHeight, chartWidth, null, null, 15, 4, states, "|", null, se);
        
        //where the highest value is located in the chart
        var valueTop = chartHeight * 0.1,
            valueLow = chartHeight;

        //first polygon drawn, hack hack hack
        var x1 = 0,
            y1 = valueTop,
            x2 = chartWidth * 0.4,
            y2 = valueLow;
        var hackPolygon = se.path(["M", x1, y1, 
                                   "Q", x2 * 0.7, y1 * 0.5, x2, y2, 
                                   "L", 0, valueLow, 
                                   "L", x1, y1, 
                                   "z"]).attr({ fill : "#DE1B1B", "fill-opacity" : 0.1, stroke: "#fff"});
        var label = se.text(x2 * 0.3, valueLow * 0.5, "Hack\nHack\nHack\n").attr({"font-size":12});
        //second polygon, joel test
        var x1 = chartWidth * 0.3,
            y1 = valueLow,
            x2 = chartWidth * 0.45,
            y2 = valueTop,
            x3 = chartWidth,
            y3 = valueTop;
        var joelPolygon = se.path(["M", x1, y1, 
                                   "Q", x2 * 0.75, y2 * 0.4, x2, y2, 
                                   "L", x3, y3, 
                                   "L", chartWidth, valueLow, 
                                   "L", x1, y1,
                                   "z"]).attr({ fill : "#E9E581", "fill-opacity" : 0.5, stroke: "#fff"});
        var label = se.text(x2 * 1.1, valueLow * 0.5, "10/12 in the\nJoel Test\n").attr({"font-size":12});
        //third polygon, continuous integration
        var x1 = chartWidth * 0.66,
            y1 = valueLow,
            x2 = chartWidth * 0.85,
            y2 = valueTop,
            x3 = chartWidth,
            y3 = valueTop;
        var ciPolygon = se.path(["M", x1, y1, 
                                 "Q", x2 * 0.8, y2 * 0.4, x2, y2, 
                                 "L", x3, y3, 
                                 "L", chartWidth, valueLow, 
                                 "L", x1, y1,
                                 "z"]).attr({ fill : "#2B2B2B", "fill-opacity" : 0.3, stroke: "#fff"});
        var label = se.text(x2, valueLow * 0.5, "Continuous Integration\nFTW\n").attr({"font-size":12});
        //create hack intervals
        var makeSector = function(paper, cx, cy, r, startAngle, endAngle, params) {
            var rad = Math.PI / 180;
            var x1 = cx + r * Math.cos(-startAngle * rad),
                x2 = cx + r * Math.cos(-endAngle * rad),
                y1 = cy + r * Math.sin(-startAngle * rad),
                y2 = cy + r * Math.sin(-endAngle * rad);
            var slice = paper.path(["M", cx, cy, 
                                    "L", x1, y1, 
                                    "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, 
                                    "z"]).attr(params);
            return slice;
        }
        var hackLocations = [0.55, 0.7, 0.9];
        for (var i = 0; i < hackLocations.length; i++) {
            var x1 = chartWidth * hackLocations[i],
                y1 = valueLow;

            makeSector(se, x1, y1, chartWidth * 0.045, 0, 180, { fill : "#DE1B1B", stroke: "#fff","fill-opacity" : 0.2, "stroke-width":0});
            var label = se.text(x1, valueLow * 0.95, "Hack");
        }
    };

    function createTeamChart() {
        $("#team_chart").children().remove();
        var paperWidth = $("#team_chart").parent().width();
        var paperHeight = paperWidth / 3;
        
        var r = Raphael("team_chart", paperWidth, paperHeight);

        var y = [1, 4, 8, 12, 16,8,9,14,24,36,31,2,22,24,24,15,4,4,8,12];

        var years = ["97", "98", "99", "00", "01", "02", "03", "04", "05", "06", 
                     "07", "08", "09", "10", "11", "12", "13"];
        var values = [1, 6, 7, 7, 3, 4, 5, 5, 6, 8, 11, 14, 15, 14, 14, 14, 1];
        var colors = ["#E9E581", "#E9E581", "#E9E581", "#E9E581", "#2B2B2B", "#2B2B2B", 
                      "#2B2B2B", "#2B2B2B", "#2B2B2B", "#2B2B2B", "#2B2B2B", "#2B2B2B",
                      "#2B2B2B", "#2B2B2B", "#2B2B2B", "#2B2B2B", "#DE1B1B"];
        var b = r.barchart(25, 0, paperWidth * 0.9, paperHeight, [values], { stacked: false, type:"soft", colors: colors});
        Raphael.g.axis(10, paperHeight, paperWidth * 0.9, null, null, 16, 4, years, " ", null, r);
        Raphael.g.axis(15, paperHeight * 0.9, paperHeight, null, null, 5, 3, y, " ", null, r);
    };

    function createSkillsChart() {
        $("#coxcomb-skills").children().remove();
        var paperWidth = $("#coxcomb-skills").parent().width();
        var paperHeight = paperWidth * 0.9;
        var lastSelection;
        var properties = {
            categoryFontSize: paperWidth > 500 ? 12 : 10,
            seriesFontSize: paperWidth > 500 ? 15 : 12,
            onClick: function(polygon, text) {
                var products = productsBySkill[text];
                $('.selectedProduct').removeClass('selectedProduct');
                if (products && products.length > 0) {
                    for (var i = 0; i < products.length; i++) {
                        $("#product_" + products[i]).addClass("selectedProduct");
                    }
                    if (lastSelection) {
                        lastSelection.remove();
                    }
                    lastSelection = polygon.glow();
                    setTimeout(function() {
                      $('html, body').animate({
                              scrollTop: $("#shippedSection").offset().top
                      }, 200);
                    }, 200);
                }
            },
            categorySize : 0.30,
            stroke: "#fff"
        };
        Raphael("coxcomb-skills", paperWidth, paperHeight)
                .coxCombChart(paperWidth / 2,paperHeight / 2, paperHeight / 2, skills, properties);
    };

    $(document).ready(function() {
        loadShippedProducts();
        var createLayout = function() {
            var width = $(window).width();
            if (width < 1260) {
                $("p.name").css("font-size", "2em");
                $("p.degree em").css("font-size", "1.2em");
            }
            else {
                $("p.name").css("font-size", "2.5em");
                $("p.degree em").css("font-size", "1.5em");
            }
            if (width < 760) {
                $("#banner-text").hide();
            }
            else {
                $("#banner-text").show();
            }
            createSkillsChart();
            createSEChart();
            createTeamChart();
        };
        createLayout();
        $("#navProducts").click(function() {
            $('html, body').animate({
                scrollTop: $("#shippedSection").offset().top
            }, 600);
        });
        $("#navTools").click(function() {
            $('html, body').animate({
                scrollTop: $("#toolsSection").offset().top
            }, 600);
        });
        $("#navTeam").click(function() {
            $('html, body').animate({
                scrollTop: $("#teamSection").offset().top
            }, 600);
        });
        //in order to avoid media-queries in javascript, old style resizing handler
        //gets triggered every time not only on match should be done by hand
        $(window).resize(function() {
            createLayout();
        });
    });
        


}());
