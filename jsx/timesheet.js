/**
 * Created by spick on 19/10/2015.
 */

var UnapprovedTime = React.createClass ({
   render: function() {
       return(
           <br/>
       );
   }
});






var CostTypes = React.createClass ({
   render: function(){
       var rows = [];
       rows.push(<option value='' >  </option>);
       var selected = this.props.option;
       COSTTYPES.forEach(function(item){
           var s = item.code + '\x20-\x20' + item.description;
               rows.push(<option value={item.code}>{s}</option>);
       });
       return (
           <form>
               <select className="form-control" defaultValue={selected}>
                   {rows}
               </select>
           </form>
       );
   }
});



var DateNavigation = React.createClass({
    handleWeekClick: function(event) {
        location.href = './TSReactWeekView-Emp.html';
    },
    handleDayClick: function(event){
        location.href = 'TSReactDayView.html';
    },
    render: function() {
        var period = this.props.period;
        var defaultPeriod = 'btn btn-default btn-sm';
        var DAY = defaultPeriod;
        var WEEK = defaultPeriod;
        var FORTNIGHT = defaultPeriod;
        var dateDesc = '';
        if (period == "Day"){
            DAY = 'btn btn-default btn-sm active';
            dateDesc = '12 October 2015';
        }
        if (period == "Week"){
            WEEK += ' active';
            dateDesc = '12-18 October 2015';
        }
        if (period == "Fortnight"){
            FORTNIGHT += ' active';
            dateDesc = '05-18 October 2015';
        }
        return (
            <div className="container-fluid">
                <div className="row dateNavigation">
                    <div className="col-md-12">
                        <table width="100%">
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-default btn-sm" >Today</button> </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="...">
                                        <button type="button" className="btn btn-default btn-sm"  >
                                            <span className="glyphicon glyphicon-chevron-left"></span>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm"  >
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                        </button>
                                    </div>
                                    <strong  className="startEndDate">{dateDesc}</strong>
                                    <div className="btn-group periods" role="group" aria-label="...">
                                        <button type="button" className={DAY} onClick={this.handleDayClick}>
                                            Day
                                        </button>
                                        <button type="button" className={WEEK} onClick={this.handleWeekClick}>Week</button>
                                        <button type="button" className={FORTNIGHT}  >Fortnight</button>
                                        <button type="button" className="btn btn-default btn-sm"  >Month</button>
                                    </div>

                                </td>

                                <td className="text-right" >
                                    <select>
                                        <option>Frank OZ</option>
                                        <option>Frank's Boss</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});


var DayViewTableFunctions = React.createClass({
    render: function() {
        return (
            <div className="container-fluid tableFunctions">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <table width="100%">
                            <tr>
                                <td className="h6 text-left" style={{color: "#727272"}} >Add&nbsp;Job/Project&nbsp;</td>
                                <td className="text-left" width="40%">
                                    <JobProjectSearch onAdd={this.props.onAdd}/>
                                </td>
                                <td width="40%">
                                </td>
                                <td className="text-right" width="30%">
                                    <button type="button" className="btn btn-default btn-sm"  >Delete</button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary btn-sm"  >Copy</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});


var JobProjectSearch = React.createClass ({
    propTypes: {
        onAdd: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
          value: 'A'
        };
    },
    handleJobSelection: function(event) {
        this.props.onAdd(event);
        this.setState({
            value: 'A'
        });
    },
    render: function() {
        return(
            <form >
            <select value={this.state.value} className="js-select2 form-control"  autoFocus={true} onChange={this.handleJobSelection} >
                <option value="A" className="noselection"  ></option>
                <optgroup label="BCC">
                    <option >BBHSINENT - Bartle Bogle Hegarty Singapore Ent</option>
                    <option>BBHSINES - Contract Support Allowance Variance</option>
                </optgroup>
                <optgroup label="Jobs">
                    <option>F39544 - Angular - Dual List Box</option>
                    <option>F39507 - Masterfile web API</option>
                    <option>F39506 - Masterfile web API</option>
                    <option>F39505 - Masterfile web API</option>
                    <option>F39504 - Masterfile web API</option>
                    <option>F39503 - Masterfile web API</option>
                    <option>F39502 - Masterfile web API</option>
                    <option>F39400 - Masterfile web API</option>
                    <option>F20000 - Masterfile web API</option>
                </optgroup>
                <optgroup label="Pepsi">
                    <option>PEP0002 - Sampling Campaign 2015 -PEPSI</option>
                    <option className="project">PEP0002 - Non retainer  - PEPSI</option>
                    <option>PEP0001 - Sampling Campaign Summer 2014  - PEPSI</option>
                    <option className="project">PEP0001 - Non retainer  - PEPSI</option>
                </optgroup>
            </select>
            </form>

        );
    }
});

var RecentJobsProjects = React.createClass ({
        render: function() {
            return(
                <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle btn-sm"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Recent <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li className="comment">Your last x used Jobs/Projects</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li><a href="#">---------------------------------------------------------------</a></li>
                    </ul>
                </div>
            );
        }
    }

);

var EmployeeSelectionRow = React.createClass({
    render: function() {
        var commentStyle = {
            width: 300
        };
        if (this.props.delegation)
        {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <table width="100%">
                                <tr>
                                    <td colSpan="2">
                                        <select>
                                            <option>My timesheet</option>
                                            <option>Bosses timesheet</option>
                                        </select>
                                    </td>
                                    <td colSpan="1" className="comment text-center">Employee view - with
                                        delegation
                                    </td>
                                    <td style={commentStyle}></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-fluid employeeSelectionHidden">
                    <div className="row">
                        <div className="col-md-12">
                            <div></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
});


var Pinned = React.createClass ({
    render: function() {
        var pinned = !this.props.pin ?
            <span className="glyphicon glyphicon-pushpin"></span> :
            <span className="glyphicon glyphicon-pushpin" style={{color: 'red'}}></span>;
        return (pinned);
    }
});


var Header = React.createClass({
    render: function() {
        var activeTab = this.props.tab;
        var tabs = this.props.tabs;

        var rows = [];
        this.props.tabs.forEach(function(tab) {
            if (tab.active) {
                rows.push(<li className="active"  key={tab.key}><a href="#">{tab.name}</a></li>);
            } else {
                rows.push(<li  key={tab.key}><a href={tab.href}>{tab.name}</a></li>);
            }
        });

        return (
            <nav className="navbar navbar-default  navbar-fixed-top" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <ul className="nav navbar-nav ">
                            <li><a className="navbar-brand bccLogo" href="#">
                                BCC
                            </a>
                            </li>
                            <li>
                                <a href="#" className="timesheetslogostyle bccLogo">Time</a> </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {rows}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="TSReactSignon.html" className="name">Frank OZ</a></li>
                            <li><a href="TSReactSignon.html">Sign out</a></li>
                            <li><a href="#" alt="Settings" title="Settings"><span className="glyphicon glyphicon-cog"></span></a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">BCC Melbourne<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="comment">This will display your client databases</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">BCC Sydney</a></li>
                                    <li><a href="#">BCC Ho Chi Minh</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

function columnAddTotals(totals, row){
    for (var i = 0; i < 7; i++){
        if (row.days[i].hours != '') {
            totals[i] += parseFloat(row.days[i].hours);
        }
    }
}

var WeeklyTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        var colTotals = [0,0,0,0,0,0,0];
        this.props.times.forEach(function(times) {
            rows.push(<WeeklyTimeRow times={times} key={times.key} />);
            //for (var i = 0; i < 7; i++){
            //    if (times.days[i].hours != '') {
            //        colTotals[i] += parseFloat(times.days[i].hours);
            //    }
            //}
            columnAddTotals(colTotals, times);
        });

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th >Pin</th>
                                <th>Job / Project</th>
                                <th>Cost type</th>

                                <th>Bill</th>
                                <th>
                                    <span className="glyphicon glyphicon-time"></span>
                                </th>
                                <th className="num">Mon 12</th>
                                <th className="num">Tue 13</th>
                                <th className="num">Wed 14</th>
                                <th className="num">Thu 15</th>
                                <th className="num">Fri 16</th>
                                <th className="num">Sat 17</th>
                                <th className="num">Sun 18</th>
                                <th>Est</th>
                                <th></th>
                                <th className="totals num">Total</th>
                                <th><input type="checkbox" /></th>

                            </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                            <tr className="totals">
                                <td></td>
                                <td colSpan="4">Totals&nbsp;&nbsp; <span className="dailyMinimum"> (Daily minimum hours is 7.50)</span></td>
                                <td className="num ">{colTotals[0].toFixed(2)}</td>
                                <td className="num ">{colTotals[1].toFixed(2)}</td>
                                <td className="num missingTime">{colTotals[2].toFixed(2)}</td>
                                <td className="num missingTime">{colTotals[3].toFixed(2)}</td>
                                <td className="num missingTime">{colTotals[4].toFixed(2)}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="num">24.00</td>
                                <td></td>

                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

var WeeklyTimeRow = React.createClass({
    render: function() {
        var billable = '';
        if (this.props.times.job){
            if (this.props.times.billable) {
                billable = <input type="checkbox" checked="checked"/>;
            }else {
                billable = <input type="checkbox"/>;
            }
        }else {
            billable = ''
        }
        //var name = this.props.times.stocked ?
        //    this.props.times.client :
        //    <span style={{color: 'red'}}>
        //                    {this.props.times.client}
        //                </span>;
        return (
            <tr>

                <td><Pinned pin={this.props.times.pin}/></td>
                <td>{this.props.times.client}</td>
                <td>{this.props.times.costType + ' - ' + this.props.times.ctdescription}</td>
                <td>
                    {billable}
                </td>
                <td>
                    <span className="glyphicon glyphicon-time"></span>
                </td>
                <td className="num today">{this.props.times.days[0].hours}</td>
                <td className="num" >{this.props.times.days[1].hours}</td>
                <td className="num">{this.props.times.days[2].hours}</td>
                <td className="num">{this.props.times.days[3].hours}</td>
                <td className="num">{this.props.times.days[4].hours}</td>
                <td className="num">{this.props.times.days[5].hours}</td>
                <td className="num">{this.props.times.days[6].hours}</td>
                <td>{this.props.times.estimate}</td>
                <td className="visual">
                    <div className="progress">
                        <div className="progress-bar progress-bar-success est">
                            <span className="sr-only">35% Complete (success)</span>
                        </div>
                    </div>
                </td>
                <td className="rowtotals num">{this.props.times.total}</td>
                <td><input type="checkbox" /> </td>

            </tr>
        );
    }
});


var DescriptionView = React.createClass({
    getInitialState: function() {
        return {
            showBillableOnly: false,
            dayView: true,
            projectView: false
        };
    },
    handleProjectClick: function(event) {
        this.setState({
            projectView: !this.state.projectView,
            dayView: false
        });
    },
    handleDayClick: function(event) {
        this.setState({
           dayView: !this.state.dayView,
            projectView: false
        });
    },
    handleShowBillableOnlyClick: function(event) {
        if (this.state.showBillableOnly) {
            this.setState({
                showBillableOnly: false
            });
        } else {
            this.setState({
                showBillableOnly: true
            });
        }
    },
    render: function() {
        var chkboxDivStyle = {display: "inline",
            marginLeft: 10};
        var dayClasses = this.state.dayView ? "btn btn-default btn-sm active" : "btn btn-default btn-sm";
        return (
            <div className="container-fluid notesView">
                <div className="row notes">
                    <div className="col-md-12">
                        <table width="100%">
                            <tr>
                                <td></td>
                                <td className="text-left">
                                    <span className="h5">View notes by</span>
                                    &nbsp;
                                    <div className="btn-group" role="group" >
                                        <button type="button" className={dayClasses}
                                                onClick={this.handleDayClick}>Day</button>
                                        <button type="button" className="btn btn-default btn-sm"
                                                onClick={this.handleProjectClick}>Job</button>
                                        </div>

                                    <div className="descriptionview" id="divbillableOnly" style={chkboxDivStyle}>
                                        <input type="checkbox" id="billableOnly"
                                               onClick={this.handleShowBillableOnlyClick} />
                                        <label htmlFor="billableOnly" >Show billable jobs only</label>
                                    </div>
                                </td>

                                <td className="text-right descriptionview">
                                    {(this.state.projectView || this.state.dayView) && <div>
                                    <button type="button" className="btn btn-default btn-sm ">
                                        Reply/Reject
                                    </button>
                                        &nbsp;&nbsp;
                                    < button type="button" className="btn btn-primary btn-sm">
                                        Approve
                                        </button>
                                        </div>
                                    }
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                {!this.state.projectView && this.state.dayView && <DayView times={this.props.timesheet} days={this.props.days} showBillableOnly={this.state.showBillableOnly}/>}
                {!this.state.dayView && this.state.projectView && <ProjectView times={this.props.timesheet} days={this.props.days}  showBillableOnly={this.state.showBillableOnly}/>}
            </div>

        );
    }
});

var DayView = React.createClass({
    render: function(){
        var rows = [];
        var lastday = null;

        for (var number = 0;number < 7;number +=1){
            var dayofweek = DAYS[number].day;
            for (var index = 0; index < TIMES2.length;index++) {
                if (TIMES2[index].days[number].hours !== "" ){
                    if (lastday != dayofweek){
                        rows.push(<DayViewDateRow date={dayofweek} />)
                    }
                    if (!this.props.showBillableOnly || TIMES2[index].billable) {
                        rows.push(<DayViewRow times={TIMES2[index]} key={TIMES2[index].key + dayofweek}
                                              hours={TIMES2[index].days[number].hours}
                                              note={TIMES2[index].days[number].note}/>)
                    }
                    lastday = dayofweek;
                }
            }
        }
        return(
                <div className="row" id="dayview">
                    <div className="col-md-12">
                        <table className="table table-hover" >
                            <DayViewHeader />
                            <tbody>
                             {rows}
                            <DayViewFooter />
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
});

var DayViewHeader = React.createClass ({
    render: function(){
        return (
            <thead>
            <tr>
                <th></th>
                <th className='jp'>Job / Project</th>
                <th>Cost&nbsp;type</th>
                <th>Bill</th>
                <th>Hours</th>
                <th>Notes</th>
                <th><input type="checkbox" /></th>
            </tr>
            </thead>
        );
    }
});

var DayViewDateRow = React.createClass ({
    render: function(){
        return (
            <tr className="active">
                <td colSpan="7"><strong>{this.props.date}</strong></td>
            </tr>
        );
    }
});

var DayViewRow = React.createClass ({
    render: function(){
        var billable = '';
        if (this.props.times.job){
            if (this.props.times.billable) {
                billable = <input type="checkbox" checked="checked"/>;
            }else {
                billable = <input type="checkbox"/>;
            }
        }else {
            billable = ''
        }
        return (
            <tr>
                <td></td>
                <td>{this.props.times.client}</td>
                <td>{this.props.times.costType}</td>
                <td>{billable}</td>
                <td className="num">{this.props.hours}</td>
                <td >{this.props.note}</td>
                <td><input type="checkbox" /></td>
            </tr>
        );
    }
});

var DayViewFooter = React.createClass ({
    render: function() {
        return (
            <tr className="totals">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
});


var ProjectView = React.createClass ({
    render: function() {
         var rows = [];
        var billableOnly = this.props.showBillableOnly;
        TIMES2.forEach( function(row) {
                var billable = '';
                if (row.job){
                    if (row.billable) {
                        billable = <input type="checkbox" checked="checked"/>;
                    }else {
                        billable = <input type="checkbox"/>;
                    }
                }
                if (!billableOnly || row.billable) {
                    rows.push(<ProjectViewProjectRow project={row.client}
                                                     costtype={row.costType}
                                                     key={row.client + row.costType}/>);
                    for (var number = 0; number < 7; number += 1) {
                        var dayofweek = DAYS[number].day;
                        if (row.days[number].hours !== "") {
                            rows.push(<ProjectViewRow times={row} key={row.key + dayofweek}
                                                      hours={row.days[number].hours}
                                                      note={row.days[number].note}
                                                      date={dayofweek}
                                                      billable={billable}/>)
                        }
                    }
                }
            }
        );

        return (
                <div className="row" id="projectView">
                    <div className="col-md-12">
                        <table className="table table-hover" >
                           <ProductViewHeader />
                            <tbody>
                            {rows}
                            <ProductViewFooter />
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
});


var ProductViewHeader = React.createClass ({
    render: function(){
        return (
            <thead>
            <tr>
                <th colSpan="2">Job / Project</th>
                <th>Billable</th>
                <th className="num">Hours</th>
                <th>Notes</th>
                <th><input type="checkbox" /></th>
            </tr>
            </thead>
        );
    }
});


var ProjectViewProjectRow = React.createClass ({
    render: function(){
        return (
            <tr className="active">
                <td colSpan="7"><strong>{this.props.project + " - " + this.props.costtype}</strong></td>
            </tr>
        );
    }
});

var ProjectViewRow = React.createClass ({
    render: function(){
          return (
            <tr>
                <td></td>
                <td>{this.props.date}</td>
                <td>{this.props.billable}</td>
                <td className="num">{this.props.hours}</td>
                <td >{this.props.note}</td>
                <td><input type="checkbox" /></td>
            </tr>
        );
    }
});

var ProductViewFooter = React.createClass ({
    render: function() {
        return (
            <tr className="totals">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
});


var Billable = React.createClass ({
    render: function() {
        var billable = '';
        if (this.props.times.job){
            if (this.props.times.billable) {
                billable = <input type="checkbox" checked="checked"/>;
            }else {
                billable = <input type="checkbox"/>;
            }
        }
        return (billable);
    }
});


var ClientSelect = React.createClass ({
        render: function() {
            return (
                <form>
                 </form>
            );
        }
    });

/*Note used -----------------*/

/*
*<div>
    <input type="text" className="input-sm search"
           placeholder="Search by Client, Brand, Campaign, Job / Project"
           style={inputStyle} />
</div>
    */