import {BrowserRouter, Route, Switch} from "react-router-dom";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Landing from "../views/Landing";
import LogLanding from "../views/Loglanding";
import Profile from "../views/Profile";
import ViewScheduled from "../components/Appointment/ViewScheduled";
import Schedule from "../components/Appointment/schedule";
import ViewRequests from "../components/Appointment/ViewRequests";
import ViewConfirmed from "../components/Appointment/ViewConfirmed";
import UserView from "../components/Appointment/UserView";
import UserBooking from "../components/Appointment/UserBooking";
import AddNotice from "../components/Notice/AddNotice";
import NoticeTable from "../components/Notice/noticeView";
import AllNotice from "../components/Notice/AllNoticeView";
import AddMessage from "../components/Notice/AddMessage";
import MessageView from "../components/Notice/MessageView";
import AllMessageView from "../components/Notice/AllMessageView";
import Receive from "../components/Finance/CashReceive";
import Expense from "../components/Finance/AddExpenses";
import PettyCash from "../components/Finance/ViewPettycash";
import AddForum from "../components/Forum/AddForum";
import AddNewForum from "../components/Forum/AddNewForum";
import ForumTable from "../components/Forum/ForumView";
import ForumView from "../components/Pages/Formpage";
import Fund from "../components/Finance/ViewFund";
import ReceivedFund from "../components/Finance/AddReceivedfund";
import AllocateFund from "../components/Finance/AllocateFund";
import Donation from "../components/Finance/ViewDonation";
import AddDonation from "../components/Finance/AddDonation";
import ConstMaterial from "../components/Material/ConstMaterial";
import AddnewconstMaterial from "../components/Material/AddnewconstMaterial";
import AddconstMaterial from "../components/Material/AddconstMaterial";
import SupplyconstMaterial from "../components/Material/SupplyconstMaterial";
import ViewSupplyConst from "../components/Material/ViewSuppliedconstMaterial";
import AgriMaterial from "../components/Material/AgriMaterial";
import AddnewagriMaterial from "../components/Material/AddnewagriMaterial";
import AddagriMaterial from "../components/Material/AddagriMaterial";
import SupplyagriMaterial from "../components/Material/SupplyagriMaterial";
import ViewSupplyAgri from "../components/Material/ViewSuppliedagriMaterial";
import OtherMaterial from "../components/Material/OtherMaterial";
import AddnewotherMaterial from "../components/Material/AddnewotherMaterial";
import AddotherMaterial from "../components/Material/AddotherMaterial";
import SupplyotherMaterial from "../components/Material/SupplyotherMaterial";
import ViewSupplyOther from "../components/Material/ViewSuppliedotherMaterial";
import Const from "../components/Material/Users/Const";
import Agri from "../components/Material/Users/Agri";
import Other from "../components/Material/Users/Other";
import CardPageVisitsCheck from "../components/Cards/CardPageVisitsCheck";
import React from "react";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Auth} />
                {/* add routes without layouts */}
                <Route path="/landing" exact component={Landing} />
                <Route path="/Loglanding" exact component={LogLanding} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/" exact component={Landing} />
                {/* add redirect for first page */}
                {/* <Redirect from="*" to="/" /> */}

                {/* Appointment  */}
                <Route path="/ViewScheduled"  component={ViewScheduled} />
                <Route path="/schedule"  component={Schedule} />
                <Route path="/ViewRequests"  component={ViewRequests} />
                <Route path="/ViewConfirmed"  component={ViewConfirmed} />
                <Route path="/UserView"  component={UserView} />
                <Route path="/UserBooking"  component={UserBooking} />



                {/* Notices */}
                <Route path="/AddNotice"  component={AddNotice} />
                <Route path="/noticeView"  component={NoticeTable} />
                <Route path="/AllNoticeView"  component={AllNotice} />
                {/* sms */}
                <Route path="/AddMessage"  component={AddMessage} />
                <Route path="/MessageView"  component={MessageView} />
                <Route path="/AllMessageView"  component={AllMessageView} />


                {/* FINANCE */}
                {/* Petty Cash */}
                <Route path="/CashReceive" component={Receive}/>
                <Route path="/AddExpenses" component={Expense}/>
                <Route path="/ViewPettycash" component={PettyCash}/>

                {/* Forum */}
                <Route path="/AddForum" component={AddForum}/>
                <Route path="/AddNewForum" component={AddNewForum}/>
                <Route path="/forumView" component={ForumTable}/>
                <Route path="/Forumpage" component={ForumView}/>

                {/* Fund */}
                <Route path="/ViewFund" component={Fund}/>
                <Route path="/AddReceivedfund" component={ReceivedFund}/>
                <Route path="/AllocateFund" component={AllocateFund}/>
                {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}

                {/* Donation */}
                <Route path="/ViewDonation" component={Donation}/>
                <Route path="/AddDonation" component={AddDonation}/>
                {/* <Route path="/viewwdonation" component={ViewDonation}/> */}
                {/* Material */}
                {/* Const Material */}
                <Route path="/ConstMaterial" component={ConstMaterial}/>
                <Route path="/AddnewconstMaterial" component={AddnewconstMaterial}/>
                <Route path="/AddconstMaterial" component={AddconstMaterial}/>
                <Route path="/SupplyconstMaterial" component={SupplyconstMaterial}/>
                <Route path="/ViewSuppliedconstMaterial" component={ViewSupplyConst}/>

                {/* Agri Material */}
                <Route path="/AgriMaterial" component={AgriMaterial}/>
                <Route path="/AddnewagriMaterial" component={AddnewagriMaterial}/>
                <Route path="/AddagriMaterial" component={AddagriMaterial}/>
                <Route path="/SupplyagriMaterial" component={SupplyagriMaterial}/>
                <Route path="/ViewSuppliedagriMaterial" component={ViewSupplyAgri}/>

                {/* Other Material */}
                <Route path="/OtherMaterial" component={OtherMaterial}/>
                <Route path="/AddnewotherMaterial" component={AddnewotherMaterial}/>
                <Route path="/AddotherMaterial" component={AddotherMaterial}/>
                <Route path="/SupplyotherMaterial" component={SupplyotherMaterial}/>
                <Route path="/ViewSuppliedotherMaterial" component={ViewSupplyOther}/>

                {/* Users(Material) */}
                <Route path ="/Users/Const" component={Const}/>
                <Route path ="/Users/Agri" component={Agri}/>
                <Route path ="/Users/Other" component={Other}/>

                {/* people */}


                <Route path="/CardPageVisitsCheck" component={CardPageVisitsCheck}/>
                {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;