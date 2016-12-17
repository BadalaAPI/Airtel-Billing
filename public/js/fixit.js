angular.module('fixit', [])
   .controller('fixitController', function($scope) {
        $scope.content = [
        {problem:' Is your IE Browser responding really slow? Apply the Fix it and it clears your browsing cache/cookies and history which increases the performance of the browser. Compatible with: IE Browser 6',file:'Browsercook.exe',tag:'browser'},
		{problem:' Internal/External Websites not opening up? Apply the Fix it and it sets the required Proxy settings on the IE Browser which should fix the problem. Compatible with: IE Browser 6,7,8',file:'Proxy.exe',tag:'browser'},
		{problem:' Is your System Running Slow? One of the reason 	s your system is running slow is because your Temporary folders are full and the system is running out of disk space. Apply the Fix it to clears all the unwanted files.',file:'RemoveFiles.exe',tag:'system'},
		{problem:' Reset your IE Settings. Apply this fix for all IE issues like slow performance or sites not opening up or you want to roll your IE to factory settings. Compatible with: IE Browser 6,7,8',file:'IEReset.exe',tag:'browser',tag:'browser'},
		{problem:'	Is your Outlook not opening up. Apply this fix for Outlook Error: "Cannot start Microsoft Office Outlook. Cannot open the Outlook window". Compatible with: IE Browser 6,7,8',file:'outlook.exe',tag:'system'},
		{problem:'	Is Enterprise Mode not appearing under the Tools menu in IE11? Apply the FIX to add Enterprise Mode to your tools menu [Compatible with IE Browser 11]',file:'iefix.exe',tag:'system'},
		{problem:'	Do you want to make Windows Authenticate Wireless Prior to Logon Apply this fix.',file:'wifi.exe',tag:'system'},
		{problem:' Is your Skype for Business Recording not working ? Apply this fix to make your Skype for Business Recording working.',file:'op.exe',tag:'system'},
		{problem:'	Are you experiencing frequent account lockouts? Please try clearing your "cached" saved windows credentials. Apply this fix to clear any "cached" saved windows credentials on your computer,quiet often old saved passwords cause frequent account lockouts if not synced correctly.',file:'UserAccountLockoutFix.exe',tag:'system'},
		{problem:'	Need to download AntiVirus tool ClamAV? Click on FixIT to download clamAV.exe file.',file:'clamwin-0.99.1-setup.exe',tag:'dowload'},
		{problem:'	Need to download getsup? Click on FixIT to download getsup.exe file.',file:'getsusp.exe',tag:'system'},
		{problem:'	Need to download realprotect 64-bit? Click on FixIT to download realprotect.exe file.',file:'realprotect 64-bit.exe',tag:'download'},
		{problem:'	Need to download Reline_Standard Collector? Click on FixIT to download Reline_Standard Collector file.',file:'Reline_Standard Collector.zip',tag:'download'},
		{problem:' Need to download sdl-redline? Click on FixIT to download sdl-redline file.',file:'sdl-redline.zip',tag:'download'},
		{problem:'	Need to download MA 5.0.4.2.83.exe file? Click on FixIT to download MA 5.0.4.2.83.exe file.',file:'MA 5.0.4.2.83.exe',tag:'download'},
		{problem:'	Need to download VSE 8.8.1599.zip file? Click on FixIT to download VSE 8.8.1599.zip file.',file:'VSE 8.8.1599.zip',tag:'download'},
		{problem:' Need to download Certs zip file? Click on FixIT to download CA Technologies Certs.app.zip file.',file:'CA Technologies Certs.app.zip',tag:'download'},
		{problem:' Need to download Certs exe file? Click on FixIT to download InstallCACerts.exe file. works best on Internet Explorer.',file:'InstallCACerts.exe',tag:'download'}
    ];
	$scope.myFun = function(file){
	window.location.href='apps/'+file
  }
});
