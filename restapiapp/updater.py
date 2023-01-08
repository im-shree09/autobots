from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from .views import sending_email

def start():
    scheduler = BackgroundScheduler()
    # scheduler.add_job(sending_email , 'interval' , second = 5)
<<<<<<< HEAD
    scheduler.add_job(sending_email , 'cron' , day_of_week = 'mon-fri' ,  hour = 13 , minute = 51)
=======
    scheduler.add_job(sending_email , 'cron' , day_of_week = 'mon-sat' ,  hour = 14 , minute = 50)
>>>>>>> 8e827e57588981d93a73ccc2edad958ca63b7b8a
    scheduler.start()