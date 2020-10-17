#!/bin/bash
cat /proc/meminfo |grep MemTotal|sed 's|MemTotal:||g'|sed 's|kB||g'|sed 's| ||g'|while read KB dummy;do echo $((KB/1024));done